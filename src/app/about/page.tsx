// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The CX Debt framework was created to give support leaders the same financial language that engineering has used for decades.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-narrow">
          <h1 className="text-display text-slate-900 mb-6">
            Why CX Debt Exists
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              I&apos;ve spent my career building and leading support organizations —
              from Tier 1-3 team structures at ADP and ReverseLogix to
              designing AI-first support strategies that scale. Across every
              role, I&apos;ve seen the same pattern:
            </p>

            <blockquote>
              <p>
                Engineering walks into a leadership meeting and says &ldquo;We have
                $2.4 million in technical debt.&rdquo; The room listens. Budgets
                shift. Priorities change.
              </p>
              <p>
                Support walks into the same meeting and says &ldquo;We have a backlog
                of 847 tickets.&rdquo; The room nods politely. Nothing changes.
              </p>
            </blockquote>

            <p>
              The difference isn&apos;t the severity of the problem. It&apos;s the
              language. Engineering has a financial metaphor that executives
              understand intuitively. Support has a neutral word —
              &ldquo;backlog&rdquo; — that communicates volume but not cost.
            </p>

            <p>
              <strong>CX Debt</strong> is my attempt to close that gap. It&apos;s a
              framework that applies the same compounding-cost logic to
              customer experience issues: every day a ticket goes unresolved,
              it accrues interest in the form of repeat contacts, escalations,
              churn risk, and agent burnout. That interest is real and
              measurable — we just haven&apos;t been measuring it.
            </p>

            <p>
              The calculator on this site is a working tool, not a thought
              experiment. It uses published industry benchmarks from MetricNet,
              Gartner, and Forrester to translate your support metrics into
              financial language. The goal is to give every support leader the
              ability to walk into a room and say:
            </p>

            <blockquote>
              <p>
                &ldquo;We&apos;re carrying $247,000 in CX Debt, accruing at $38,000 per
                month. Here&apos;s how we pay it down.&rdquo;
              </p>
            </blockquote>

            <p>
              That changes the conversation. That changes the budget. That
              changes outcomes.
            </p>

            <h2>About Me</h2>

            <p>
              {/* UPDATE: Replace with your actual bio */}
              I&apos;m a CX and Support Operations leader focused on scaling and
              evolving support teams using AI-first strategies and modern
              tooling. My experience spans health tech, SaaS, and enterprise
              platforms, including building Tier 1-3 support structures and
              implementing operational frameworks that connect support metrics
              to business outcomes.
            </p>

            <p>
              CX Debt is one of several operational projects I&apos;m building. You
              can see more of my work at{" "}
              <a
                href="https://wesonops.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                wesonops.com
              </a>
              .
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/calculator" className="btn-primary">
              Try the Calculator
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="https://wesonops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit wesonops.com
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
