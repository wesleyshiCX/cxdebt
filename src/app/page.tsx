// src/app/page.tsx
import Link from "next/link";
import {
  TrendingUp,
  Calculator,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  DollarSign,
  Clock,
  RotateCcw,
  Users,
  MessageSquareWarning,
} from "lucide-react";

const debtTypes = [
  {
    name: "Resolution Debt",
    description:
      "Tickets open beyond SLA that accumulate handling cost with every passing day.",
    icon: Clock,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    name: "Knowledge Debt",
    description:
      "Missing or outdated documentation causing the same questions to generate tickets repeatedly.",
    icon: BookOpen,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    name: "Escalation Debt",
    description:
      "Systemic issues stuck in cross-functional limbo while support absorbs the daily cost.",
    icon: TrendingUp,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    name: "Process Debt",
    description:
      "Manual workarounds and inefficiencies that tax every interaction with unnecessary cost.",
    icon: RotateCcw,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Onboarding Debt",
    description:
      "Gaps in customer onboarding that generate predictable support volume 30-60 days later.",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    name: "Feedback Debt",
    description:
      "Customer feedback collected but never acted on, systematically eroding trust.",
    icon: MessageSquareWarning,
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
];

const keyMetrics = [
  {
    label: "CX Debt Balance",
    description: "Total estimated dollar value of your unresolved backlog",
    icon: DollarSign,
  },
  {
    label: "CX Debt Ratio",
    description:
      "Proportion of your support budget consumed by servicing existing debt",
    icon: TrendingUp,
  },
  {
    label: "Debt Trajectory",
    description:
      "Whether your debt is growing, stable, or shrinking over time",
    icon: AlertTriangle,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-narrow text-center">
          <div className="badge-amber mb-6">New Framework</div>

          <h1 className="text-display-lg font-bold text-slate-900 mb-6">
            Your support backlog
            <br />
            isn&apos;t a queue.
            <br />
            <span className="text-accent-600">It&apos;s a balance sheet.</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            <strong>CX Debt</strong> is the compounding cost — financial,
            operational, and relational — of unresolved customer experience
            issues. Like technical debt, it accrues interest. Unlike technical
            debt, almost no one is measuring it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/calculator" className="btn-primary text-base px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Your CX Debt
            </Link>
            <Link href="/framework" className="btn-secondary text-base px-8 py-4">
              Read the Framework
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-sm text-slate-900 mb-4">
                Engineering understood this 30 years ago.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In 1992, Ward Cunningham introduced the concept of{" "}
                <em>technical debt</em> — the idea that shortcuts in code
                accumulate interest over time, making future changes
                increasingly expensive.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The concept transformed how engineering organizations
                communicate with executives. It gave them a financial metaphor
                for an operational reality.
              </p>
              <p className="text-slate-900 font-semibold leading-relaxed">
                Support and CX teams have never had an equivalent. They call it 
                <strong>backlog</strong> — a neutral word for a compounding
                financial problem.
              </p>
            </div>

            <div className="card bg-slate-50 border-slate-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      &ldquo;We have $2.4M in technical debt.&rdquo;
                    </p>
                    <p className="text-sm text-slate-500">
                      Engineering says this. Executives listen. Budgets move.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200" />

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-700 text-sm font-bold">✗</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      &ldquo;We have a backlog of 847 tickets.&rdquo;
                    </p>
                    <p className="text-sm text-slate-500">
                      Support says this. Executives shrug. Nothing changes.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200" />

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent-700 text-sm font-bold">→</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      &ldquo;We&apos;re carrying $247K in CX Debt, accruing at
                      $38K/month.&rdquo;
                    </p>
                    <p className="text-sm text-slate-500">
                      Same problem. Financial language. Now it&apos;s a priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Types of CX Debt */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-display-sm text-slate-900 mb-4">
              Six types of CX Debt
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              CX Debt isn&apos;t just old tickets. It&apos;s a systemic pattern
              that compounds across every layer of your support operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {debtTypes.map((type) => (
              <div key={type.name} className="card-hover">
                <div
                  className={`w-10 h-10 ${type.bg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <type.icon className={`w-5 h-5 ${type.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/framework"
              className="text-accent-600 hover:text-accent-700 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
            >
              Explore the full framework <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What the Calculator Measures */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-display-sm text-slate-900 mb-4">
              What gets measured gets managed
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The CX Debt Calculator translates your operational metrics into
              financial language executives act on.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {keyMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <metric.icon className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/calculator" className="btn-primary text-base px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Try the Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-narrow text-center">
          <h2 className="text-display-sm text-white mb-4">
            Stop calling it backlog.
            <br />
            Start calling it what it is.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Every day an issue goes unresolved, the cost compounds. The first
            step is making that cost visible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/calculator" className="btn-primary text-base px-8 py-4">
              Calculate Your CX Debt
            </Link>
            <Link
              href="/framework"
              className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors"
            >
              Read the Framework
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
