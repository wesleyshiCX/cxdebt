// src/app/calculator/page.tsx
import type { Metadata } from "next";
import { CalculatorClient } from "@/components/calculator/CalculatorClient";

export const metadata: Metadata = {
  title: "CX Debt Calculator",
  description:
    "Calculate the financial impact of your unresolved support backlog. Input your team metrics and get your CX Debt Balance, Ratio, and Trajectory.",
};

export default function CalculatorPage() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="badge-amber mb-4">Interactive Tool</div>
          <h1 className="text-display text-slate-900 mb-4">
            CX Debt Calculator
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Input your support organization&apos;s metrics to calculate your CX
            Debt Balance, Ratio, and 12-month trajectory.
          </p>
        </div>

        <CalculatorClient />
      </div>
    </section>
  );
}
