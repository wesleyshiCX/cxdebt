// src/app/calculator/page.tsx
import type { Metadata } from "next";
import { CalculatorClient } from "@/components/calculator/CalculatorClient";

export const metadata: Metadata = {
  title: "CX Debt Calculator",
  description:
    "Calculate the financial impact of your unresolved support backlog in real time. Input your team metrics and instantly see your CX Debt Balance, Ratio, and Trajectory.",
};

export default function CalculatorPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <div className="text-center mb-10">
          <div className="badge-amber mb-4">Interactive Tool</div>
          <h1 className="text-display text-slate-900 mb-3">
            CX Debt Calculator
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real-time analysis of your support organization&apos;s hidden debt.
            Inputs on the left, insights on the right.
          </p>
        </div>

        <CalculatorClient />
      </div>
    </section>
  );
}
