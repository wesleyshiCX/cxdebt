// src/components/calculator/CalculatorClient.tsx
"use client";

import { useState, useMemo } from "react";
import { calculateCXDebt } from "@/lib/calculator";
import type { CalculatorInputs, CalculatorResults } from "@/lib/types";
import { ResultsDashboard } from "./ResultsDashboard";
import { InputPanel } from "./InputPanel";
import { EmptyState } from "./EmptyState";
import { Sparkles, RotateCcw } from "lucide-react";

const EMPTY_INPUTS: CalculatorInputs = {
  totalHeadcount: 0,
  avgFullyLoadedCost: 65000,
  tierCount: 2,
  monthlyTicketVolume: 0,
  avgResolutionTimeHours: 0,
  targetResolutionTimeHours: 0,
  currentBacklog: 0,
  pctBeyondSLA: 0,
  avgAgeBeyondSLADays: 0,
  avgTouchesPerTicket: 0,
  pctRepeatKnownIssue: 0,
  avgCLTV: 0,
  monthlyChurnRate: 0,
  avgRevenuePerAccountMonth: 0,
  currentCSAT: 0,
};

const EXAMPLE_INPUTS: CalculatorInputs = {
  totalHeadcount: 8,
  avgFullyLoadedCost: 65000,
  tierCount: 3,
  monthlyTicketVolume: 3200,
  avgResolutionTimeHours: 48,
  targetResolutionTimeHours: 8,
  currentBacklog: 850,
  pctBeyondSLA: 60,
  avgAgeBeyondSLADays: 18,
  avgTouchesPerTicket: 4.2,
  pctRepeatKnownIssue: 35,
  avgCLTV: 24000,
  monthlyChurnRate: 4.5,
  avgRevenuePerAccountMonth: 500,
  currentCSAT: 68,
};

export function CalculatorClient() {
  const [inputs, setInputs] = useState<CalculatorInputs>(EMPTY_INPUTS);

  // Determine if the user has provided enough data to calculate
  const hasMinimumData = useMemo(() => {
    return (
      inputs.totalHeadcount > 0 &&
      inputs.monthlyTicketVolume > 0 &&
      inputs.currentBacklog > 0
    );
  }, [inputs]);

  // Real-time calculation as user types
  const results: CalculatorResults | null = useMemo(() => {
    if (!hasMinimumData) return null;
    return calculateCXDebt(inputs);
  }, [inputs, hasMinimumData]);

  const updateInputs = (partial: Partial<CalculatorInputs>) => {
    setInputs((prev) => ({ ...prev, ...partial }));
  };

  const handleLoadExample = () => {
    setInputs(EXAMPLE_INPUTS);
  };

  const handleReset = () => {
    setInputs(EMPTY_INPUTS);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Input Panel - Left Side */}
      <div className="lg:col-span-5">
        <div className="sticky top-24">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Your Inputs</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Results update as you type
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleLoadExample}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent-700 bg-accent-50 hover:bg-accent-100 rounded-lg transition-colors"
                  title="Load example data"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Example
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  title="Clear all fields"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>
            </div>

            <InputPanel inputs={inputs} onChange={updateInputs} />
          </div>
        </div>
      </div>

      {/* Results Panel - Right Side */}
      <div className="lg:col-span-7">
        {results ? (
          <ResultsDashboard results={results} inputs={inputs} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
