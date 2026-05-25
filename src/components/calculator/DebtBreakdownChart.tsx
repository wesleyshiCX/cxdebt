// src/components/calculator/DebtBreakdownChart.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { DebtBreakdown } from "@/lib/types";

interface DebtBreakdownChartProps {
  breakdown: DebtBreakdown;
}

const COLORS: Record<keyof DebtBreakdown, string> = {
  resolution: "#ef4444",
  knowledge: "#f59e0b",
  escalation: "#f97316",
  process: "#3b82f6",
  onboarding: "#8b5cf6",
  feedback: "#64748b",
};

const LABELS: Record<keyof DebtBreakdown, string> = {
  resolution: "Resolution",
  knowledge: "Knowledge",
  escalation: "Escalation",
  process: "Process",
  onboarding: "Onboarding",
  feedback: "Feedback",
};

function formatCurrencyShort(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
}

export function DebtBreakdownChart({ breakdown }: DebtBreakdownChartProps) {
  const data = Object.entries(breakdown)
    .map(([key, value]) => ({
      name: LABELS[key as keyof DebtBreakdown],
      value,
      key: key as keyof DebtBreakdown,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e8f0"
            horizontal={false}
          />
          <XAxis
            type="number"
            tickFormatter={formatCurrencyShort}
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
            width={80}
          />
          <Tooltip
            formatter={(value: number) => [formatCurrencyShort(value), "Debt"]}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              fontSize: "13px",
            }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
            {data.map((entry) => (
              <Cell key={entry.key} fill={COLORS[entry.key]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
