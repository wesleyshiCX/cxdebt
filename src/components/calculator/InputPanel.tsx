// src/components/calculator/InputPanel.tsx
import type { CalculatorInputs } from "@/lib/types";

interface InputPanelProps {
  inputs: CalculatorInputs;
  onChange: (partial: Partial<CalculatorInputs>) => void;
}

export function InputPanel({ inputs, onChange }: InputPanelProps) {
  return (
    <div className="space-y-8">
      {/* Section 1: Team Profile */}
      <section>
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
          Team Profile
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="input-label">Headcount</label>
              <input
                type="number"
                className="input-field"
                placeholder="25"
                value={inputs.totalHeadcount || ""}
                onChange={(e) =>
                  onChange({ totalHeadcount: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label className="input-label">Annual Cost/Agent</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  className="input-field pl-7"
                  placeholder="65000"
                  value={inputs.avgFullyLoadedCost || ""}
                  onChange={(e) =>
                    onChange({ avgFullyLoadedCost: Number(e.target.value) })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <label className="input-label">Tier Structure</label>
            <div className="flex gap-2">
              {[
                { value: 1, label: "Single" },
                { value: 2, label: "Tier 1-2" },
                { value: 3, label: "Tier 1-2-3" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChange({ tierCount: option.value })}
                  className={`flex-1 py-2 rounded-lg border text-xs font-medium transition-colors ${
                    inputs.tierCount === option.value
                      ? "border-accent-600 bg-accent-50 text-accent-700"
                      : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="input-label">Monthly Ticket Volume</label>
            <input
              type="number"
              className="input-field"
              placeholder="2400"
              value={inputs.monthlyTicketVolume || ""}
              onChange={(e) =>
                onChange({ monthlyTicketVolume: Number(e.target.value) })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="input-label">Avg Resolution (hrs)</label>
              <input
                type="number"
                className="input-field"
                placeholder="24"
                value={inputs.avgResolutionTimeHours || ""}
                onChange={(e) =>
                  onChange({ avgResolutionTimeHours: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label className="input-label">Target SLA (hrs)</label>
              <input
                type="number"
                className="input-field"
                placeholder="8"
                value={inputs.targetResolutionTimeHours || ""}
                onChange={(e) =>
                  onChange({
                    targetResolutionTimeHours: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Backlog & Aging */}
      <section>
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
          Backlog &amp; Aging
        </h3>

        <div className="space-y-4">
          <div>
            <label className="input-label">Current Open Backlog</label>
            <input
              type="number"
              className="input-field"
              placeholder="340"
              value={inputs.currentBacklog || ""}
              onChange={(e) =>
                onChange({ currentBacklog: Number(e.target.value) })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="input-label">% Beyond SLA</label>
              <div className="relative">
                <input
                  type="number"
                  className="input-field pr-7"
                  placeholder="35"
                  min={0}
                  max={100}
                  value={inputs.pctBeyondSLA || ""}
                  onChange={(e) =>
                    onChange({ pctBeyondSLA: Number(e.target.value) })
                  }
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  %
                </span>
              </div>
            </div>
            <div>
              <label className="input-label">Avg Age (days)</label>
              <input
                type="number"
                className="input-field"
                placeholder="12"
                value={inputs.avgAgeBeyondSLADays || ""}
                onChange={(e) =>
                  onChange({ avgAgeBeyondSLADays: Number(e.target.value) })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="input-label">Touches / Ticket</label>
              <input
                type="number"
                step="0.1"
                className="input-field"
                placeholder="3.2"
                value={inputs.avgTouchesPerTicket || ""}
                onChange={(e) =>
                  onChange({ avgTouchesPerTicket: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label className="input-label">% Known-Issue</label>
              <div className="relative">
                <input
                  type="number"
                  className="input-field pr-7"
                  placeholder="28"
                  min={0}
                  max={100}
                  value={inputs.pctRepeatKnownIssue || ""}
                  onChange={(e) =>
                    onChange({ pctRepeatKnownIssue: Number(e.target.value) })
                  }
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Business Impact */}
      <section>
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
          Business Impact
        </h3>

        <div className="space-y-4">
          <div>
            <label className="input-label">Average CLTV</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                $
              </span>
              <input
                type="number"
                className="input-field pl-7"
                placeholder="24000"
                value={inputs.avgCLTV || ""}
                onChange={(e) => onChange({ avgCLTV: Number(e.target.value) })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="input-label">Monthly Churn %</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  className="input-field pr-7"
                  placeholder="2.5"
                  min={0}
                  max={100}
                  value={inputs.monthlyChurnRate || ""}
                  onChange={(e) =>
                    onChange({ monthlyChurnRate: Number(e.target.value) })
                  }
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  %
                </span>
              </div>
            </div>
            <div>
              <label className="input-label">Revenue/Account/Mo</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  className="input-field pl-7"
                  placeholder="500"
                  value={inputs.avgRevenuePerAccountMonth || ""}
                  onChange={(e) =>
                    onChange({
                      avgRevenuePerAccountMonth: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <label className="input-label">Current CSAT</label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                className="input-field pr-7"
                placeholder="78"
                min={0}
                max={100}
                value={inputs.currentCSAT || ""}
                onChange={(e) =>
                  onChange({ currentCSAT: Number(e.target.value) })
                }
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                %
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
