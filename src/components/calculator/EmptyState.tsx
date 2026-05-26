// src/components/calculator/EmptyState.tsx
import { Calculator, ArrowLeft, Sparkles } from "lucide-react";

export function EmptyState() {
  return (
    <div className="card h-full min-h-[600px] flex flex-col items-center justify-center text-center p-12">
      <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mb-6">
        <Calculator className="w-8 h-8 text-accent-600" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        Ready to calculate
      </h3>

      <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
        Enter your support organization&apos;s metrics on the left and your CX
        Debt analysis will appear here in real time.
      </p>

      <div className="space-y-3 text-left max-w-sm w-full">
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-xs font-bold text-slate-500">1</span>
          </div>
          <span>
            Start with <strong>Headcount</strong>,{" "}
            <strong>Monthly Volume</strong>, and{" "}
            <strong>Current Backlog</strong>
          </span>
        </div>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-xs font-bold text-slate-500">2</span>
          </div>
          <span>
            Add backlog aging details for accurate resolution debt
          </span>
        </div>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-xs font-bold text-slate-500">3</span>
          </div>
          <span>
            Include business impact metrics for full debt projections
          </span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 w-full max-w-sm">
        <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Click <strong className="text-slate-600">Example</strong> above to see
          a demo
        </p>
      </div>
    </div>
  );
}
