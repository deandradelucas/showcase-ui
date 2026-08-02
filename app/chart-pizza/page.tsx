"use client"

import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { pieChartData, pieChartConfig } from "@/lib/chart-demo-data"

export default function ChartPizza() {
  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Chart (Pizza)</CardTitle>
          <CardDescription>PieChart do Recharts via ChartContainer.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[300px] w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie data={pieChartData} dataKey="visitantes" nameKey="navegador" />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
