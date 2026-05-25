// src/lib/types.ts
export interface CalculatorInputs {
  // Team Profile
  totalHeadcount: number;
  avgFullyLoadedCost: number;
  tierCount: number;
  monthlyTicketVolume: number;
  avgResolutionTimeHours: number;
  targetResolutionTimeHours: number;

  // Backlog & Aging
  currentBacklog: number;
  pctBeyondSLA: number;
  avgAgeBeyondSLADays: number;
  avgTouchesPerTicket: number;
  pctRepeatKnownIssue: number;

  // Business Impact
  avgCLTV: number;
  monthlyChurnRate: number;
  avgRevenuePerAccountMonth: number;
  currentCSAT: number;
}

export interface DebtBreakdown {
  resolution: number;
  knowledge: number;
  escalation: number;
  process: number;
  onboarding: number;
  feedback: number;
}

export interface TrajectoryPoint {
  month: number;
  label: string;
  currentPath: number;
  optimizedPath: number;
}

export interface Recommendation {
  title: string;
  description: string;
  estimatedSavings: number;
  debtType: keyof DebtBreakdown;
  priority: "high" | "medium" | "low";
}

export interface CalculatorResults {
  // Headline metrics
  cxDebtBalance: number;
  cxDebtRatio: number;
  monthlyAccrual: number;
  severity: "low" | "moderate" | "high" | "critical";

  // Breakdown
  breakdown: DebtBreakdown;

  // Trajectory
  trajectory: TrajectoryPoint[];

  // Recommendations
  recommendations: Recommendation[];

  // Supporting metrics
  costPerTicketT1: number;
  costPerTicketT2: number;
  costPerTicketT3: number;
  monthlySupportBudget: number;
  annualDebtProjection: number;
}
