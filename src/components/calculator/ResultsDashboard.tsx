// src/components/calculator/ResultsDashboard.tsx
"use client";

import type { CalculatorResults, CalculatorInputs } from "@/lib/types";
import { DebtTrajectoryChart } from "./DebtTrajectoryChart";
import { DebtBreakdownChart } from "./DebtBreakdownChart";
import {
  DollarSign,
  TrendingUp,
  AlertTriangle,
  RotateCcw,
  ArrowDown,
  ArrowUp,
  Minus,
} from "lucide-react";

interface ResultsDashboardProps {
  results: CalculatorResults;
  inputs: CalculatorInputs;
  onReset: () => void;
}

const severityConfig = {
  low: {
    label: "Low",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    description: "Your CX Debt is manageable. Focus on preventing accumulation.",
  },
  moderate: {
    label: "Moderate",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    description:
      "Your CX Debt is accumulating. Targeted interventions can reverse the trend.",
  },
  high: {
    label: "High",
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
    description:
      "Your CX Debt is significant. Without action, it will materially impact retention and costs.",
  },
  critical: {
    label: "Critical",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    description:
      "Your CX Debt is at crisis levels. Immediate action is required to prevent compounding losses.",
  },
};

const priorityConfig = {
  high: { badge: "badge-red", label: "High Priority" },
  medium: { badge: "badge-amber", label: "Medium Priority" },
  low: { badge: "badge-green", label: "Low Priority" },
};

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
}

export function ResultsDashboard({
  results,
  inputs,
  onReset,
}: ResultsDashboardProps) {
  const sev = severityConfig[results.severity];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Severity Banner */}
      <div
        className={`${sev.bg} ${sev.border} border rounded-xl p-5 mb-8 flex items-start gap-4`}
      >
        <AlertTriangle className={`w-6 h-6 ${sev.color} flex-shrink-0 mt-0.5`} />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-base font-bold ${sev.color}`}>
              CX Debt Severity: {sev.label}
            </span>
          </div>
          <p className={`text-sm ${sev.color} opacity-80`}>
            {sev.description}
          </p>
        </div>
      </div>

      {/* Headline Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="metric-card">
          <DollarSign className="w-8 h-8 text-accent-600 mx-auto mb-2" />
          <div className="metric-value text-slate-900">
            {formatCurrency(results.cxDebtBalance)}
          </div>
          <div className="metric-label">CX Debt Balance</div>
          <p className="text-xs text-slate-400 mt-2">
            Annualized cost of all unresolved CX issues
          </p>
        </div>

        <div className="metric-card">
          <TrendingUp className="w-8 h-8 text-accent-600 mx-auto mb-2" />
          <div
            className={`metric-value ${
              results.cxDebtRatio > 0.3
                ? "text-red-600"
                : results.cxDebtRatio > 0.15
                ? "text-amber-600"
                : "text-green-600"
            }`}
          >
            {results.cxDebtRatio.toFixed(2)}
          </div>
          <div className="metric-label">CX Debt Ratio</div>
          <p className="text-xs text-slate-400 mt-2">
            Monthly debt accrual ÷ monthly support budget
          </p>
        </div>

        <div className="metric-card">
          <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
            {results.cxDebtRatio > 0.15 ? (
              <ArrowUp className="w-8 h-8 text-red-500" />
            ) : results.cxDebtRatio > 0.05 ? (
              <Minus className="w-8 h-8 text-amber-500" />
            ) : (
              <ArrowDown className="w-8 h-8 text-green-500" />
            )}
          </div>
          <div className="metric-value text-slate-900">
            {formatCurrency(results.monthlyAccrual)}
          </div>
          <div className="metric-label">Monthly Accrual</div>
          <p className="text-xs text-slate-400 mt-2">
            New debt added each month at current trajectory
          </p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Debt Trajectory */}
        <div className="card">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            12-Month Debt Trajectory
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Current path vs. optimized path with targeted interventions
          </p>
          <DebtTrajectoryChart data={results.trajectory} />
        </div>

        {/* Debt Breakdown */}
        <div className="card">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Debt Breakdown by Type
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Where your CX Debt is concentrated
          </p>
          <DebtBreakdownChart breakdown={results.breakdown} />
        </div>
      </div>

      {/* Supporting Metrics */}
      <div className="card mb-10">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Supporting Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-slate-50 rounded-lg">
            <div className="text-lg font-bold text-slate-900">
              ${results.costPerTicketT1.toFixed(2)}
            </div>
            <div className="text-xs text-slate-500">Cost/Ticket (T1)</div>
          </div>
          {inputs.tierCount >= 2 && (
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <div className="text-lg font-bold text-slate-900">
                ${results.costPerTicketT2.toFixed(2)}
              </div>
              <div className="text-xs text-slate-500">Cost/Ticket (T2)</div>
            </div>
          )}
          {inputs.tierCount >= 3 && (
            <div className="text-center p-3 bg-slate-50 rounded-lg">
              <div className="text-lg font-bold text-slate-900">
                ${results.costPerTicketT3.toFixed(2)}
              </div>
              <div className="text-xs text-slate-500">Cost/Ticket (T3)</div>
            </div>
          )}
          <div className="text-center p-3 bg-slate-50 rounded-lg">
            <div className="text-lg font-bold text-slate-900">
              {formatCurrency(results.monthlySupportBudget)}
            </div>
            <div className="text-xs text-slate-500">Monthly Budget</div>
          </div>
          <div className="text-center p-3 bg-slate-50 rounded-lg">
            <div className="text-lg font-bold text-red-600">
              {formatCurrency(results.annualDebtProjection)}
            </div>
            <div className="text-xs text-slate-500">12-Mo Projection</div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="card mb-10">
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          Recommended Actions
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          Prioritized interventions to reduce your CX Debt
        </p>

        <div className="space-y-4">
          {results.recommendations.map((rec, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-400">
                    {index + 1}.
                  </span>
                  <h4 className="font-semibold text-slate-900">{rec.title}</h4>
                </div>
                <span className={priorityConfig[rec.priority].badge}>
                  {priorityConfig[rec.priority].label}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-3 pl-6">
                {rec.description}
              </p>
              <div className="pl-6">
                <span className="text-sm font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">
                  Estimated savings: {formatCurrency(rec.estimatedSavings)}/month
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={onReset} className="btn-secondary">
          <RotateCcw className="w-4 h-4 mr-2" />
          Recalculate
        </button>
        {/* PDF export will go here in v2 */}
      </div>
    </div>
  );
}
