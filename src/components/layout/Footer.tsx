// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-slate-900 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">CX</span>
              </div>
              <span className="text-base font-bold text-slate-900">
                CX Debt
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              A framework for quantifying the compounding cost of unresolved
              customer experience issues. Built to make the invisible visible.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/framework"
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Framework
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Attribution */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Created By
            </h4>
            <p className="text-sm text-slate-500">
              {/* UPDATE: Replace with your actual name */}
              <span className="font-medium text-slate-700">Wesley Shi</span>
              <br />
              Technical Support Operations Leader
            </p>
            <a
              href="https://wesonops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent-600 hover:text-accent-700 mt-2 font-medium transition-colors"
            >
              wesonops.com →
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {currentYear} CX Debt Framework. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            &nbsp;
          </p>
        </div>
      </div>
    </footer>
  );
}
