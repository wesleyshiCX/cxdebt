// src/components/calculator/StepBacklog.tsx
import type { CalculatorInputs } from "@/lib/types";

interface StepBacklogProps {
  inputs: CalculatorInputs;
  onChange: (partial: Partial<CalculatorInputs>) => void;
}

export function StepBacklog({ inputs, onChange }: StepBacklogProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">
        Backlog &amp; Aging
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        This is where debt lives. How much unresolved work is your team
        carrying?
      </p>

      <div className="space-y-5">
        <div>
          <label className="input-label">Current Open Backlog</label>
          <input
            type="number"
            className="input-field"
            placeholder="e.g., 340"
            value={inputs.currentBacklog || ""}
            onChange={(e) =>
              onChange({ currentBacklog: Number(e.target.value) })
            }
          />
          <p className="input-hint">
            Total unresolved tickets right now, across all queues.
          </p>
        </div>

        <div>
          <label className="input-label">Percentage Beyond SLA</label>
          <div className="relative">
            <input
              type="number"
              className="input-field pr-8"
              placeholder="e.g., 35"
              min={0}
              max={100}
              value={inputs.pctBeyondSLA || ""}
              onChange={(e) =>
                onChange({ pctBeyondSLA: Number(e.target.value) })
              }
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              %
            </span>
          </div>
        </div>

        <div>
          <label className="input-label">
            Avg Age of Beyond-SLA Tickets (days)
          </label>
          <input
            type="number"
            className="input-field"
            placeholder="e.g., 12"
            value={inputs.avgAgeBeyondSLADays || ""}
            onChange={(e) =>
              onChange({ avgAgeBeyondSLADays: Number(e.target.value) })
            }
          />
          <p className="input-hint">
            How long, on average, have SLA-breached tickets been open?
          </p>
        </div>

        <div>
          <label className="input-label">
            Average Touches Per Ticket
          </label>
          <input
            type="number"
            step="0.1"
            className="input-field"
            placeholder="e.g., 3.2"
            value={inputs.avgTouchesPerTicket || ""}
            onChange={(e) =>
              onChange({ avgTouchesPerTicket: Number(e.target.value) })
            }
          />
          <p className="input-hint">
            Total interactions (agent replies + customer follow-ups) per
            ticket on average.
          </p>
        </div>

        <div>
          <label className="input-label">
            Repeat / Known-Issue Tickets
          </label>
          <div className="relative">
            <input
              type="number"
              className="input-field pr-8"
              placeholder="e.g., 28"
              min={0}
              max={100}
              value={inputs.pctRepeatKnownIssue || ""}
              onChange={(e) =>
                onChange({ pctRepeatKnownIssue: Number(e.target.value) })
              }
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              %
            </span>
          </div>
          <p className="input-hint">
            Percentage of monthly volume that are questions with known answers
            or tickets for known bugs.
          </p>
        </div>
      </div>
    </div>
  );
}
