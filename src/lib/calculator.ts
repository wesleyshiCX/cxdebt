// src/lib/calculator.ts
import type { CalculatorInputs, CalculatorResults, DebtBreakdown, TrajectoryPoint, Recommendation } from "./types";

// Industry benchmarks (sourced from MetricNet, HDI, Gartner, Forrester)
const BENCHMARKS = {
  avgHandleTimeMinutesT1: 14,          // MetricNet average
  tierMultiplierT2: 1.8,               // MetricNet
  tierMultiplierT3: 3.2,               // MetricNet
  repeatContactProbCoefficient: 0.15,  // Gartner: aged tickets generate follow-ups
  escalationProbPerDay: 0.04,          // Estimated: ~4% escalation probability per day past SLA
  escalationProbCap: 0.55,             // Caps at 55%
  churnMultiplierForPoorCX: 2.4,       // Qualtrics XM Institute
  csatImpactPerSLABreach: 1.8,        // Zendesk Benchmark: ~1.8pt CSAT drop per 2x SLA breach
  selfServiceDeflectionPotential: 0.30, // Gartner: 20-40% of L1, using conservative 30%
  workingHoursPerYear: 2080,
  processDebtPctOfVolume: 0.12,        // Estimated: ~12% of handle time is process waste
  onboardingDebtPctOfVolume: 0.08,     // Estimated: ~8% of tickets trace to onboarding gaps
  feedbackDebtChurnMultiplier: 1.15,   // Detractors without follow-up churn 15% more
};

export function calculateCXDebt(inputs: CalculatorInputs): CalculatorResults {
  const {
    totalHeadcount,
    avgFullyLoadedCost,
    tierCount,
    monthlyTicketVolume,
    avgResolutionTimeHours,
    targetResolutionTimeHours,
    currentBacklog,
    pctBeyondSLA,
    avgAgeBeyondSLADays,
    avgTouchesPerTicket,
    pctRepeatKnownIssue,
    avgCLTV,
    monthlyChurnRate,
    avgRevenuePerAccountMonth,
    currentCSAT,
  } = inputs;

  // === DERIVED METRICS ===

  // Cost per ticket at each tier
  const hourlyRate = avgFullyLoadedCost / BENCHMARKS.workingHoursPerYear;
  const costPerTicketT1 = hourlyRate * (BENCHMARKS.avgHandleTimeMinutesT1 / 60);
  const costPerTicketT2 = costPerTicketT1 * BENCHMARKS.tierMultiplierT2;
  const costPerTicketT3 = costPerTicketT1 * BENCHMARKS.tierMultiplierT3;

  // Monthly support budget
  const monthlySupportBudget = (totalHeadcount * avgFullyLoadedCost) / 12;

  // Tickets beyond SLA
  const ticketsBeyondSLA = Math.round(currentBacklog * (pctBeyondSLA / 100));

  // === RESOLUTION DEBT ===
  // Each ticket beyond SLA accrues cost from repeat contacts and escalation probability
  const resolutionDebt = (() => {
    if (ticketsBeyondSLA === 0 || avgAgeBeyondSLADays === 0) return 0;

    const repeatContactProb =
      BENCHMARKS.repeatContactProbCoefficient *
      Math.log(1 + avgAgeBeyondSLADays);

    const escalationProb = Math.min(
      BENCHMARKS.escalationProbCap,
      BENCHMARKS.escalationProbPerDay * avgAgeBeyondSLADays
    );

    const dailyAccrualPerTicket =
      repeatContactProb * costPerTicketT1 +
      escalationProb * (costPerTicketT2 - costPerTicketT1);

    return ticketsBeyondSLA * dailyAccrualPerTicket * avgAgeBeyondSLADays;
  })();

  // === KNOWLEDGE DEBT ===
  // Cost of tickets that could be deflected by self-service content
  const knowledgeDebt = (() => {
    const repeatTicketsPerMonth =
      monthlyTicketVolume * (pctRepeatKnownIssue / 100);
    const deflectableTickets =
      repeatTicketsPerMonth * BENCHMARKS.selfServiceDeflectionPotential;
    // Annualize: what you're paying per year for answerable questions
    return deflectableTickets * costPerTicketT1 * 12;
  })();

  // === ESCALATION DEBT ===
  // Cost differential when tickets unnecessarily escalate
  const escalationDebt = (() => {
    if (ticketsBeyondSLA === 0) return 0;

    const escalationProb = Math.min(
      BENCHMARKS.escalationProbCap,
      BENCHMARKS.escalationProbPerDay * avgAgeBeyondSLADays
    );

    const estimatedEscalations = ticketsBeyondSLA * escalationProb;
    const costDifferential =
      tierCount >= 3
        ? costPerTicketT3 - costPerTicketT1
        : costPerTicketT2 - costPerTicketT1;

    return estimatedEscalations * costDifferential * 12;
  })();

  // === PROCESS DEBT ===
  // Estimated waste from manual process inefficiency
  const processDebt = (() => {
    const wasteMinutesPerTicket =
      BENCHMARKS.avgHandleTimeMinutesT1 * BENCHMARKS.processDebtPctOfVolume;
    const monthlyWasteHours =
      (monthlyTicketVolume * wasteMinutesPerTicket) / 60;
    return monthlyWasteHours * hourlyRate * 12;
  })();

  // === ONBOARDING DEBT ===
  // Tickets attributable to onboarding gaps
  const onboardingDebt = (() => {
    const onboardingTicketsPerMonth =
      monthlyTicketVolume * BENCHMARKS.onboardingDebtPctOfVolume;
    return onboardingTicketsPerMonth * costPerTicketT1 * 12;
  })();

  // === FEEDBACK DEBT ===
  // Additional churn risk from unactioned feedback
  const feedbackDebt = (() => {
    if (avgCLTV === 0 || monthlyChurnRate === 0) return 0;

    const csatGap = Math.max(0, 85 - currentCSAT); // 85 as "good" benchmark
    const additionalChurnRisk =
      (csatGap / 100) * BENCHMARKS.feedbackDebtChurnMultiplier;
    const estimatedCustomerBase =
      avgRevenuePerAccountMonth > 0
        ? monthlySupportBudget / avgRevenuePerAccountMonth // rough proxy
        : monthlyTicketVolume / 2; // fallback: assume 2 tickets per customer per month

    return additionalChurnRisk * estimatedCustomerBase * avgCLTV * (monthlyChurnRate / 100);
  })();

  // === TOTALS ===
  const breakdown: DebtBreakdown = {
    resolution: Math.round(resolutionDebt),
    knowledge: Math.round(knowledgeDebt),
    escalation: Math.round(escalationDebt),
    process: Math.round(processDebt),
    onboarding: Math.round(onboardingDebt),
    feedback: Math.round(feedbackDebt),
  };

  const cxDebtBalance = Object.values(breakdown).reduce((a, b) => a + b, 0);
  const monthlyAccrual = Math.round(cxDebtBalance / 12);
  const cxDebtRatio =
    monthlySupportBudget > 0 ? monthlyAccrual / monthlySupportBudget : 0;

  // Severity assessment
  const severity: CalculatorResults["severity"] =
    cxDebtRatio > 0.5
      ? "critical"
      : cxDebtRatio > 0.3
      ? "high"
      : cxDebtRatio > 0.15
      ? "moderate"
      : "low";

  // === TRAJECTORY (12-month projection) ===
  const trajectory: TrajectoryPoint[] = Array.from({ length: 13 }, (_, i) => {
    const growthRate = 1 + cxDebtRatio * 0.08; // debt grows proportional to ratio
    const reductionRate = 0.92; // optimized path reduces ~8% per month

    return {
      month: i,
      label: i === 0 ? "Now" : `M${i}`,
      currentPath: Math.round(cxDebtBalance * Math.pow(growthRate, i)),
      optimizedPath: Math.round(
        cxDebtBalance * Math.pow(reductionRate, i)
      ),
    };
  });

  // === RECOMMENDATIONS ===
  const recommendations: Recommendation[] = [];

  // Sort breakdown to find highest debt areas
  const sortedDebt = Object.entries(breakdown).sort(([, a], [, b]) => b - a);

  if (breakdown.knowledge > 0) {
    const monthlyKnowledgeSavings = Math.round(breakdown.knowledge / 12);
    recommendations.push({
      title: "Address Knowledge Debt First",
      description: `Your repeat/known-issue tickets represent ${pctRepeatKnownIssue}% of volume. Creating knowledge base articles for your top 5 ticket categories could deflect approximately ${Math.round(
        monthlyTicketVolume *
          (pctRepeatKnownIssue / 100) *
          BENCHMARKS.selfServiceDeflectionPotential
      )} tickets/month.`,
      estimatedSavings: monthlyKnowledgeSavings,
      debtType: "knowledge",
      priority: sortedDebt[0][0] === "knowledge" ? "high" : "medium",
    });
  }

  if (breakdown.escalation > 0 && tierCount >= 2) {
    recommendations.push({
      title: "Reduce Escalation Cost",
      description: `Your tier cost multiplier is ${
        tierCount >= 3
          ? BENCHMARKS.tierMultiplierT3.toFixed(1)
          : BENCHMARKS.tierMultiplierT2.toFixed(1)
      }x. Implementing cross-functional triage for systemic issues could reduce unnecessary escalations by 30-40%.`,
      estimatedSavings: Math.round(breakdown.escalation / 12 * 0.35),
      debtType: "escalation",
      priority: sortedDebt[0][0] === "escalation" ? "high" : "medium",
    });
  }

  if (breakdown.resolution > 0) {
    recommendations.push({
      title: "Accelerate Backlog Resolution",
      description: `You have ${ticketsBeyondSLA} tickets beyond SLA averaging ${avgAgeBeyondSLADays} days old. Each day adds approximately $${Math.round(
        resolutionDebt / ticketsBeyondSLA / avgAgeBeyondSLADays
      )} per ticket in accrued cost. A focused sprint could reduce resolution debt by 50% in 2 weeks.`,
      estimatedSavings: Math.round(breakdown.resolution / 12 * 0.5),
      debtType: "resolution",
      priority: sortedDebt[0][0] === "resolution" ? "high" : "medium",
    });
  }

  if (pctRepeatKnownIssue > 20) {
    recommendations.push({
      title: "Implement AI Deflection for Known Issues",
      description: `With ${pctRepeatKnownIssue}% of tickets being repeat/known issues, AI-powered auto-resolution could handle 40-60% of this volume, reducing monthly debt accrual significantly.`,
      estimatedSavings: Math.round(
        monthlyTicketVolume *
          (pctRepeatKnownIssue / 100) *
          0.5 *
          costPerTicketT1
      ),
      debtType: "knowledge",
      priority: "high",
    });
  }

  if (breakdown.process > 0) {
    recommendations.push({
      title: "Audit and Automate Workflows",
      description: `An estimated ${(BENCHMARKS.processDebtPctOfVolume * 100).toFixed(0)}% of handle time is consumed by process inefficiency. Workflow automation for your top 3 ticket types could recover ${Math.round(
        (monthlyTicketVolume *
          BENCHMARKS.avgHandleTimeMinutesT1 *
          BENCHMARKS.processDebtPctOfVolume) /
          60
      )} agent-hours per month.`,
      estimatedSavings: Math.round(breakdown.process / 12 * 0.4),
      debtType: "process",
      priority: "medium",
    });
  }

  return {
    cxDebtBalance,
    cxDebtRatio: Math.round(cxDebtRatio * 100) / 100,
    monthlyAccrual,
    severity,
    breakdown,
    trajectory,
    recommendations,
    costPerTicketT1: Math.round(costPerTicketT1 * 100) / 100,
    costPerTicketT2: Math.round(costPerTicketT2 * 100) / 100,
    costPerTicketT3: Math.round(costPerTicketT3 * 100) / 100,
    monthlySupportBudget: Math.round(monthlySupportBudget),
    annualDebtProjection: Math.round(cxDebtBalance * Math.pow(1 + cxDebtRatio * 0.08, 12)),
  };
}
