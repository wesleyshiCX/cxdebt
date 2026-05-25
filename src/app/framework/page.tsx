// src/app/framework/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The CX Debt Framework",
  description:
    "A comprehensive framework for identifying, categorizing, and measuring the six types of customer experience debt in support organizations.",
};

export default function FrameworkPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-narrow">
          <div className="badge-amber mb-4">Framework</div>
          <h1 className="text-display text-slate-900 mb-6">
            The CX Debt Framework
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            A structured approach to identifying, categorizing, and measuring
            the compounding cost of unresolved customer experience issues.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="card bg-accent-50 border-accent-200 mb-12">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Definition
            </h2>
            <p className="text-slate-800 leading-relaxed text-lg">
              <strong>CX Debt</strong> is the accumulated cost — financial,
              operational, and relational — incurred when customer-facing issues
              remain unresolved beyond their expected resolution window. Like
              technical debt, CX Debt compounds over time: unresolved issues
              generate escalations, repeat contacts, churn, and downstream
              support volume that exceed the original cost of resolution.
            </p>
          </div>

          {/* The Compounding Mechanism */}
          <h2 className="text-display-sm text-slate-900 mb-6">
            The Compounding Mechanism
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Technical debt works as a concept because people understand
            interest. CX Debt follows the same mechanics:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="card">
              <div className="text-2xl font-bold text-accent-600 mb-2">
                Principal
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                The original cost to resolve the issue at the time it was
                created. A Tier 1 ticket costs $15-22 to handle. This is the
                cheapest it will ever be.
              </p>
            </div>
            <div className="card">
              <div className="text-2xl font-bold text-amber-600 mb-2">
                Interest
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                The additional cost accrued for every unit of time the issue
                remains unresolved — repeat contacts, escalations, manager
                time, churn risk, and agent burnout.
              </p>
            </div>
            <div className="card">
              <div className="text-2xl font-bold text-red-600 mb-2">
                Default
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                The point at which the customer leaves, posts publicly, or the
                issue becomes unrecoverable. This is the write-off — full CLTV
                loss plus acquisition cost of replacement.
              </p>
            </div>
          </div>

          {/* Six Types */}
          <h2 className="text-display-sm text-slate-900 mb-6">
            The Six Types of CX Debt
          </h2>

          {/* Resolution Debt */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Resolution Debt
              </h3>
            </div>
            <div className="pl-[52px]">
              <p className="text-slate-600 leading-relaxed mb-4">
                Tickets that remain open beyond their SLA target, accumulating
                handling cost with every interaction. This is the most visible
                form of CX Debt and the one most organizations already track —
                but rarely in financial terms.
              </p>
              <div className="card bg-slate-50">
                <p className="text-sm text-slate-700">
                  <strong>Example:</strong> A backlog of 200 tickets averaging
                  15 days past SLA. Each generates an average of 1.3 follow-up
                  contacts. At $18/contact, the backlog isn&apos;t 200 tickets — it&apos;s
                  $4,680 in accumulated handling cost, growing daily.
                </p>
              </div>
            </div>
          </div>

          {/* Knowledge Debt */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Knowledge Debt
              </h3>
            </div>
            <div className="pl-[52px]">
              <p className="text-slate-600 leading-relaxed mb-4">
                Missing, outdated, or inaccessible documentation that forces
                customers to create tickets for answers that should be
                self-serviceable. This is often the highest-ROI debt to pay
                down first.
              </p>
              <div className="card bg-slate-50">
                <p className="text-sm text-slate-700">
                  <strong>Example:</strong> Your top 5 ticket categories account
                  for 31% of monthly volume. Three of them have no corresponding
                  knowledge base article. That&apos;s approximately $8,400/month in
                  tickets that a well-written article could deflect.
                </p>
              </div>
            </div>
          </div>

          {/* Escalation Debt */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Escalation Debt
              </h3>
            </div>
            <div className="pl-[52px]">
              <p className="text-slate-600 leading-relaxed mb-4">
                Systemic product or process issues that engineering or product
                teams won&apos;t prioritize, leaving support to absorb the ongoing
                cost of a problem they cannot solve. This is the most
                politically difficult debt to address because it crosses
                organizational boundaries.
              </p>
              <div className="card bg-slate-50">
                <p className="text-sm text-slate-700">
                  <strong>Example:</strong> A known bug filed 6 months ago
                  generates 12 tickets/month. Engineering classifies it as P3.
                  Support spends $3,200/month handling it — 10x the engineering
                  cost to fix it. The debt accrues because the cost is invisible
                  to the team that holds the fix.
                </p>
              </div>
            </div>
          </div>

          {/* Process Debt */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Process Debt
              </h3>
            </div>
            <div className="pl-[52px]">
              <p className="text-slate-600 leading-relaxed mb-4">
                Manual workarounds, redundant steps, and tool fragmentation
                that add unnecessary time and cost to every customer
                interaction. Process debt is often invisible because agents
                normalize it.
              </p>
              <div className="card bg-slate-50">
                <p className="text-sm text-slate-700">
                  <strong>Example:</strong> Agents copy data between three
                  systems for every billing inquiry, adding 4 minutes per
                  ticket. Across 800 billing tickets/month, that&apos;s 53 hours of
                  agent time — roughly $2,400/month — spent on process, not
                  resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Onboarding Debt */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">5</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Onboarding Debt
              </h3>
            </div>
            <div className="pl-[52px]">
              <p className="text-slate-600 leading-relaxed mb-4">
                Gaps in customer onboarding, implementation, or early-lifecycle
                education that generate predictable support volume 30-60 days
                after go-live. This debt is created upstream but paid
                downstream by the support team.
              </p>
              <div className="card bg-slate-50">
                <p className="text-sm text-slate-700">
                  <strong>Example:</strong> 30% of tickets in a customer&apos;s
                  second month trace back to configuration steps skipped during
                  implementation. The onboarding team hit their timeline target.
                  Support inherited the cost.
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Debt */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-slate-600 font-bold text-lg">6</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Feedback Debt
              </h3>
            </div>
            <div className="pl-[52px]">
              <p className="text-slate-600 leading-relaxed mb-4">
                Customer feedback that is collected but never acted on,
                systematically eroding trust and increasing the likelihood of
                churn. Feedback debt is unique because it compounds
                reputationally — customers who feel unheard don&apos;t just leave,
                they tell others.
              </p>
              <div className="card bg-slate-50">
                <p className="text-sm text-slate-700">
                  <strong>Example:</strong> Quarterly NPS surveys go out to
                  4,000 customers. Detractor responses get logged but no
                  closed-loop follow-up exists. Detractors churn at 2.4x the
                  rate of passives — and the survey itself accelerated the
                  decision by reminding them of unresolved frustration.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="card bg-slate-900 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to measure your CX Debt?
            </h3>
            <p className="text-slate-400 mb-6">
              The CX Debt Calculator translates these categories into dollars,
              ratios, and actionable recommendations.
            </p>
            <Link href="/calculator" className="btn-primary">
              <Calculator className="w-5 h-5 mr-2" />
              Open the Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
