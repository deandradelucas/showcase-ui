"use client"

import AreaChart, { Area } from "@/components/charts/area-chart"
import { Grid } from "@/components/charts/grid"
import { XAxis } from "@/components/charts/x-axis"
import { ChartTooltip } from "@/components/charts/tooltip"

const DATA = [
  { date: "2026-01-01", value: 320 },
  { date: "2026-01-08", value: 480 },
  { date: "2026-01-15", value: 410 },
  { date: "2026-01-22", value: 620 },
  { date: "2026-01-29", value: 540 },
  { date: "2026-02-05", value: 700 },
  { date: "2026-02-12", value: 660 },
]

export default function ChartAreaBklitDemo() {
  return (
    <div className="w-full px-4 py-8">
      <AreaChart data={DATA} xDataKey="date">
        <Grid horizontal />
        <Area dataKey="value" />
        <XAxis />
        <ChartTooltip />
      </AreaChart>
    </div>
  )
}
