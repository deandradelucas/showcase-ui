"use client"

import { Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { pieChartData, pieChartConfig } from "@/lib/chart-demo-data"

export function ChartPizzaDemo() {
  return (
    <ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[300px] w-full">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie data={pieChartData} dataKey="visitantes" nameKey="navegador" />
      </PieChart>
    </ChartContainer>
  )
}
