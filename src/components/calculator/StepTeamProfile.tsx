// src/components/calculator/StepTeamProfile.tsx
import type { CalculatorInputs } from "@/lib/types";

interface StepTeamProfileProps {
  inputs: CalculatorInputs;
  onChange: (partial: Partial<CalculatorInputs>) => void;
}

export function StepTeamProfile({ inputs, onChange }: StepTeamProfileProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Team Profile</h2>
      <p className="text-sm text-slate-500 mb-6">
        Tell us about your support organization&apos;s structure and volume.
      </p>

      <div className="space-y-5">
        <div>
          <label className="input-label">Total Support Headcount</label>
          <input
            type="number"
            className="input-field"
            placeholder="e.g., 25"
            value={inputs.totalHeadcount || ""}
            onChange={(e) =>
              onChange({ totalHeadcount: Number(e.target.value) })
            }
          />
          <p className="input-hint">
            All agents across all tiers, including team leads who handle tickets.
          </p>
        </div>

        <div>
          <label className="input-label">
            Average Fully-Loaded Agent Cost (Annual)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              $
            </span>
            <input
              type="number"
              className="input-field pl-7"
              placeholder="e.g., 65000"
              value={inputs.avgFullyLoadedCost || ""}
              onChange={(e) =>
                onChange({ avgFullyLoadedCost: Number(e.target.value) })
              }
            />
          </div>
          <p className="input-hint">
            Salary + benefits + tools + management overhead. If unsure, $65,000
            is a reasonable US median.
          </p>
        </div>

        <div>
          <label className="input-label">Tier Structure</label>
          <div className="flex gap-3">
            {[1, 2, 3].map((tier) => (
              <button
                key={tier}
                onClick={() => onChange({ tierCount: tier })}
                className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                  inputs.tierCount === tier
                    ? "border-accent-600 bg-accent-50 text-accent-700"
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {tier === 1
                  ? "Single Tier"
                  : tier === 2
                  ? "Tier 1-2"
                  : "Tier 1-2-3"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="input-label">Monthly Ticket Volume</label>
          <input
            type="number"
            className="input-field"
            placeholder="e.g., 2400"
            value={inputs.monthlyTicketVolume || ""}
            onChange={(e) =>
              onChange({ monthlyTicketVolume: Number(e.target.value) })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="input-label">
              Avg Resolution Time (hours)
            </label>
            <input
              type="number"
              className="input-field"
              placeholder="e.g., 24"
              value={inputs.avgResolutionTimeHours || ""}
              onChange={(e) =>
                onChange({ avgResolutionTimeHours: Number(e.target.value) })
              }
            />
            <p className="input-hint">Actual current average</p>
          </div>

          <div>
            <label className="input-label">
              Target Resolution Time (hours)
            </label>
            <input
              type="number"
              className="input-field"
              placeholder="e.g., 8"
              value={inputs.targetResolutionTimeHours || ""}
              onChange={(e) =>
                onChange({
                  targetResolutionTimeHours: Number(e.target.value),
                })
              }
            />
            <p className="input-hint">Your SLA target</p>
          </div>
        </div>
      </div>
    </div>
  );
}
