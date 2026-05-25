// src/components/calculator/StepBusinessImpact.tsx
import type { CalculatorInputs } from "@/lib/types";

interface StepBusinessImpactProps {
  inputs: CalculatorInputs;
  onChange: (partial: Partial<CalculatorInputs>) => void;
}

export function StepBusinessImpact({ inputs, onChange }: StepBusinessImpactProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">
        Business Impact
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Connect your support metrics to business outcomes. This is what turns
        backlog into a financial conversation.
      </p>

      <div className="space-y-5">
        <div>
          <label className="input-label">
            Average Customer Lifetime Value (CLTV)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              $
            </span>
            <input
              type="number"
              className="input-field pl-7"
              placeholder="e.g., 24000"
              value={inputs.avgCLTV || ""}
              onChange={(e) =>
                onChange({ avgCLTV: Number(e.target.value) })
              }
            />
          </div>
          <p className="input-hint">
            Total expected revenue from a single customer over their lifetime.
            If unsure, use annual contract value × average retention years.
          </p>
        </div>

        <div>
          <label className="input-label">Monthly Churn Rate</label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              className="input-field pr-8"
              placeholder="e.g., 2.5"
              min={0}
              max={100}
              value={inputs.monthlyChurnRate || ""}
              onChange={(e) =>
                onChange({ monthlyChurnRate: Number(e.target.value) })
              }
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              %
            </span>
          </div>
          <p className="input-hint">
            Percentage of customers lost per month. Industry SaaS average is
            3-7% annually (0.25-0.58% monthly).
          </p>
        </div>

        <div>
          <label className="input-label">
            Average Revenue Per Account (Monthly)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              $
            </span>
            <input
              type="number"
              className="input-field pl-7"
              placeholder="e.g., 500"
              value={inputs.avgRevenuePerAccountMonth || ""}
              onChange={(e) =>
                onChange({
                  avgRevenuePerAccountMonth: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div>
          <label className="input-label">Current CSAT Score</label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              className="input-field pr-8"
              placeholder="e.g., 78"
              min={0}
              max={100}
              value={inputs.currentCSAT || ""}
              onChange={(e) =>
                onChange({ currentCSAT: Number(e.target.value) })
              }
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              %
            </span>
          </div>
          <p className="input-hint">
            Customer satisfaction percentage. Industry average is ~75-78%.
          </p>
        </div>
      </div>
    </div>
  );
}
