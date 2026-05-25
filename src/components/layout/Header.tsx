// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Framework", href: "/framework" },
  { name: "Calculator", href: "/calculator" },
  { name: "Methodology", href: "/methodology" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-none">
                CX Debt
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase leading-none mt-0.5">
                Framework
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/calculator" className="btn-primary text-sm py-2 px-4">
              Calculate Your Debt
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/calculator"
                className="btn-primary text-sm py-2 px-4 mt-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calculate Your Debt
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
