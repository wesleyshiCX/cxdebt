// src/components/calculator/CalculatorClient.tsx
"use client";

import { useState } from "react";
import { StepTeamProfile } from "./StepTeamProfile";
import { StepBacklog } from "./StepBacklog";
import { StepBusinessImpact } from "./StepBusinessImpact";
import { ResultsDashboard } from "./ResultsDashboard";
import { calculateCXDebt } from "@/lib/calculator";
import type { CalculatorInputs, CalculatorResults } from "@/lib/types";

const INITIAL_INPUTS: CalculatorInputs = {
  // Team Profile
  totalHeadcount: 0,
  avgFullyLoadedCost: 65000,
  tierCount: 2,
  monthlyTicketVolume: 0,
  avgResolutionTimeHours: 0,
  targetResolutionTimeHours: 0,

  // Backlog & Aging
  currentBacklog: 0,
  pctBeyondSLA: 0,
  avgAgeBeyondSLADays: 0,
  avgTouchesPerTicket: 0,
  pctRepeatKnownIssue: 0,

  // Business Impact
  avgCLTV: 0,
  monthlyChurnRate: 0,
  avgRevenuePerAccountMonth: 0,
  currentCSAT: 0,
};

const STEPS = ["Team Profile", "Backlog & Aging", "Business Impact"] as const;

export function CalculatorClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputs, setInputs] = useState<CalculatorInputs>(INITIAL_INPUTS);
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const updateInputs = (partial: Partial<CalculatorInputs>) => {
    setInputs((prev) => ({ ...prev, ...partial }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleCalculate = () => {
    const calculatedResults = calculateCXDebt(inputs);
    setResults(calculatedResults);
  };

  const handleReset = () => {
    setInputs(INITIAL_INPUTS);
    setResults(null);
    setCurrentStep(0);
  };

  if (results) {
    return (
      <ResultsDashboard
        results={results}
        inputs={inputs}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {STEPS.map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                index === currentStep
                  ? "bg-accent-100 text-accent-700"
                  : index < currentStep
                  ? "bg-green-50 text-green-700"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === currentStep
                    ? "bg-accent-600 text-white"
                    : index < currentStep
                    ? "bg-green-600 text-white"
                    : "bg-slate-300 text-white"
                }`}
              >
                {index < currentStep ? "✓" : index + 1}
              </span>
              <span className="hidden sm:inline">{step}</span>
            </div>
            {index < STEPS.length - 1 && (
              <div
                className={`w-8 h-px mx-1 ${
                  index < currentStep ? "bg-green-300" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="card">
        {currentStep === 0 && (
          <StepTeamProfile inputs={inputs} onChange={updateInputs} />
        )}
        {currentStep === 1 && (
          <StepBacklog inputs={inputs} onChange={updateInputs} />
        )}
        {currentStep === 2 && (
          <StepBusinessImpact inputs={inputs} onChange={updateInputs} />
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Back
          </button>

          {currentStep < STEPS.length - 1 ? (
            <button onClick={handleNext} className="btn-primary">
              Continue
            </button>
          ) : (
            <button onClick={handleCalculate} className="btn-primary">
              Calculate CX Debt
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
