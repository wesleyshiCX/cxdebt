// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

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
          <div className="badge-green mb-4">Origin</div>
          <h1 className="text-display text-slate-900 mb-6">
            Why CX Debt Exists
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A framework born from years of watching support organizations
            struggle to be heard in the language executives understand.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            I&apos;ve spent my career building and leading support
            organizations — from Tier 1-3 team structures at ADP and
            ReverseLogix to designing Human-in-the-Loop AI support strategies
            that scale. Across every role, I&apos;ve seen the same pattern:
          </p>

          {/* Quote Block */}
          <div className="card bg-slate-50 border-l-4 border-l-accent-600 my-8">
            <Quote className="w-8 h-8 text-accent-300 mb-3" />
            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              Engineering walks into a leadership meeting and says{" "}
              <strong>&ldquo;We have $2.4 million in technical debt.&rdquo;</strong>{" "}
              The room listens. Budgets shift. Priorities change.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed">
              Support walks into the same meeting and says{" "}
              <strong>&ldquo;We have a backlog of 847 tickets.&rdquo;</strong>{" "}
              The room nods politely. Nothing changes.
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            The difference isn&apos;t the severity of the problem. It&apos;s
            the language. Engineering has a financial metaphor that executives
            understand intuitively. Support has a neutral word —
            &ldquo;backlog&rdquo; — that communicates volume but not cost.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong className="text-slate-900">CX Debt</strong> is my attempt
            to close that gap. It&apos;s a framework that applies the same
            compounding-cost logic to customer experience issues: every day a
            ticket goes unresolved, it accrues interest in the form of repeat
            contacts, escalations, churn risk, and agent burnout. That
            interest is real and measurable — we just haven&apos;t been
            measuring it.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            The calculator on this site is a working tool, not a thought
            experiment. It uses published industry benchmarks from MetricNet,
            Gartner, and Forrester to translate your support metrics into
            financial language. The goal is to give every support leader the
            ability to walk into a room and say:
          </p>

          {/* The "Result" Quote */}
          <div className="card bg-accent-50 border-l-4 border-l-accent-600 my-8">
            <Quote className="w-8 h-8 text-accent-400 mb-3" />
            <p className="text-lg text-slate-900 font-medium leading-relaxed">
              &ldquo;We&apos;re carrying $247,000 in CX Debt, accruing at
              $38,000 per month. Here&apos;s how we pay it down.&rdquo;
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">
            That changes the conversation. That changes the budget. That
            changes outcomes.
          </p>

          {/* About Me Section */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              About Me
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              I&apos;m a Technical Support Operations leader focused on
              scaling and evolving support teams using Human-in-the-Loop AI
              strategies and modern tooling. My experience spans B2B/B2C SaaS,
              HR Tech, and enterprise platforms, including building Tier 1-3
              support structures and implementing operational frameworks that
              connect support metrics to business outcomes.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              CX Debt is one of several operational projects I&apos;m
              building. You can see more of my work at{" "}
              <a
                href="https://wesonops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-700 font-medium underline underline-offset-2"
              >
                wesonops.com
              </a>
              .
            </p>
          </div>

          {/* CTA */}
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
