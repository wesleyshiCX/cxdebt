// src/components/calculator/DebtTrajectoryChart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { TrajectoryPoint } from "@/lib/types";

interface DebtTrajectoryChartProps {
  data: TrajectoryPoint[];
}

function formatCurrencyShort(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
}

export function DebtTrajectoryChart({ data }: DebtTrajectoryChartProps) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
          />
          <YAxis
            tickFormatter={formatCurrencyShort}
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
            width={60}
          />
          <Tooltip
            formatter={(value: number) => [
              formatCurrencyShort(value),
              undefined,
            ]}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              fontSize: "13px",
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
          />
          <Line
            type="monotone"
            dataKey="currentPath"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            name="Current Path"
          />
          <Line
            type="monotone"
            dataKey="optimizedPath"
            stroke="#22c55e"
            strokeWidth={2}
            dot={false}
            strokeDasharray="6 3"
            name="Optimized Path"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
