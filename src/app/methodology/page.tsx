// src/app/methodology/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology & Sources",
  description:
    "Transparent documentation of the formulas, assumptions, and industry benchmarks used in the CX Debt Calculator.",
};

export default function MethodologyPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-narrow">
          <div className="badge-green mb-4">Transparency</div>
          <h1 className="text-display text-slate-900 mb-6">
            Methodology &amp; Sources
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Every calculation in the CX Debt framework is built on published
            industry benchmarks and transparent assumptions. This page documents
            all of them.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow prose prose-slate-lg">
          {/* Philosophy */}
          <h2>Calculation Philosophy</h2>
          <p>
            The CX Debt Calculator is designed for <strong>defensible
            estimation</strong>, not decimal-point precision. Like technical
            debt calculations in engineering, the value is in making the
            invisible visible — giving support leaders financial language for
            operational realities that are otherwise dismissed as <strong>just backlog.</strong>
          </p>
          <p>
            All inputs are adjustable. All assumptions are documented below. If
            your organization has more precise data for any of these variables,
            the framework becomes more accurate — but even with industry
            defaults, it provides directionally valuable insight.
          </p>

          {/* Core Formulas */}
          <h2>Core Formulas</h2>

          <h3>Cost Per Ticket</h3>
          <div className="card bg-slate-50 not-prose font-mono text-sm mb-4">
            <p>Cost/Ticket (T1) = (Annual Fully-Loaded Cost ÷ 2,080 hours) × (14 min ÷ 60)</p>
            <p className="mt-1">Cost/Ticket (T2) = Cost/Ticket (T1) × 1.8</p>
            <p className="mt-1">Cost/Ticket (T3) = Cost/Ticket (T1) × 3.2</p>
          </div>
          <p>
            The 14-minute average handle time and tier multipliers are sourced
            from MetricNet&apos;s benchmark database, which aggregates data from
            over 4,000 support organizations globally.
          </p>

          <h3>Resolution Debt</h3>
          <div className="card bg-slate-50 not-prose font-mono text-sm mb-4">
            <p>Repeat Contact Probability = 0.15 × ln(1 + days overdue)</p>
            <p className="mt-1">Escalation Probability = min(0.55, 0.04 × days overdue)</p>
            <p className="mt-1">Daily Accrual = (Repeat Prob × T1 Cost) + (Escalation Prob × Tier Cost Δ)</p>
            <p className="mt-1">Resolution Debt = Σ(tickets beyond SLA) × Daily Accrual × Days Overdue</p>
          </div>
          <p>
            The logarithmic repeat contact model reflects the observed pattern
            that follow-up probability increases with age but with diminishing
            intensity — customers eventually stop following up (and often
            churn silently instead).
          </p>

          <h3>Knowledge Debt</h3>
          <div className="card bg-slate-50 not-prose font-mono text-sm mb-4">
            <p>Deflectable Tickets = Monthly Volume × % Repeat Issues × 30% Deflection Rate</p>
            <p className="mt-1">Knowledge Debt = Deflectable Tickets × T1 Cost × 12 months</p>
          </div>
          <p>
            The 30% deflection rate is conservative within Gartner&apos;s published
            range of 20-40% for self-service deflection potential on Tier 1
            issues.
          </p>

          <h3>CX Debt Ratio</h3>
          <div className="card bg-slate-50 not-prose font-mono text-sm mb-4">
            <p>CX Debt Ratio = Monthly Debt Accrual ÷ Monthly Support Budget</p>
          </div>
          <p>
            A ratio above 0.25 means more than 25% of your support budget is
            effectively consumed by servicing existing debt rather than
            resolving new issues. This is the single most important metric for
            executive communication.
          </p>

          {/* Benchmarks Table */}
                   <h2>Industry Benchmarks Used</h2>
          <div className="overflow-x-auto not-prose">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900 w-1/3">Metric</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900 w-1/3">Value</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900 w-1/3">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Average handle time (Tier 1)</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">14 minutes</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">MetricNet Benchmark Database</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Tier 2 cost multiplier</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">1.8×</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">MetricNet</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Tier 3 cost multiplier</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">3.2×</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">MetricNet</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Self-service deflection potential</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">20-40% (using 30%)</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">Gartner</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Churn rate for poor CX</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">2.4× baseline</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">Qualtrics XM Institute</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">CSAT impact of SLA breach</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">~1.8pt per 2× breach</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">Zendesk Benchmark Report</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Working hours per year</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">2,080</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">US Bureau of Labor Statistics</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Process waste estimate</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">~12% of handle time</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">Estimated (conservative)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="text-left py-3 px-4 text-slate-700">Onboarding-attributed tickets</td>
                  <td className="text-center py-3 px-4 text-slate-900 font-medium">~8% of volume</td>
                  <td className="text-center py-3 px-4 text-slate-500 text-sm">Estimated (conservative)</td>
                </tr>
              </tbody>
            </table>
          </div>


          <h2>Limitations &amp; Disclaimers</h2>
          <ul>
            <li>
              These calculations provide <strong>directional estimates</strong>,
              not audited financial figures. They are designed to surface hidden
              costs and facilitate executive-level conversations about support
              investment.
            </li>
            <li>
              Process Debt and Onboarding Debt percentages are estimates. If
              your organization tracks these directly, substitute your own
              values for more accurate results.
            </li>
            <li>
              Churn correlation assumes that unresolved support issues are a
              contributing factor to churn, not the sole cause. The model uses
              published correlation data, not causation claims.
            </li>
            <li>
              All benchmarks represent industry averages and may not reflect
              your specific vertical, company size, or customer segment.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
