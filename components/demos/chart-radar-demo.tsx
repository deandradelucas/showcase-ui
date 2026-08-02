"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { chartData, chartConfig } from "@/lib/chart-demo-data"

export function ChartRadarDemo() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px] w-full">
      <RadarChart data={chartData}>
        <ChartTooltip content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="mes" />
        <PolarGrid />
        <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  )
}
