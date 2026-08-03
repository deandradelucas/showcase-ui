"use client"

import LineChart from "@/components/charts/line-chart"
import { ProfitLossLine } from "@/components/charts/profit-loss-line"
import { ProfitLossLegend } from "@/components/charts/profit-loss-legend"
import { Grid } from "@/components/charts/grid"
import { XAxis } from "@/components/charts/x-axis"
import { ChartTooltip } from "@/components/charts/tooltip"

const DATA = [
  { date: "2026-01-01", value: 120 },
  { date: "2026-01-08", value: -60 },
  { date: "2026-01-15", value: 180 },
  { date: "2026-01-22", value: -30 },
  { date: "2026-01-29", value: 90 },
  { date: "2026-02-05", value: -110 },
  { date: "2026-02-12", value: 200 },
]

export default function ChartProfitLossDemo() {
  return (
    <div className="w-full space-y-3 px-4 py-8">
      <ProfitLossLegend />
      <LineChart data={DATA} xDataKey="date">
        <Grid horizontal />
        <ProfitLossLine dataKey="value" />
        <XAxis />
        <ChartTooltip />
      </LineChart>
    </div>
  )
}
