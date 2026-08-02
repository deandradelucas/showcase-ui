"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { chartData, chartConfig } from "@/lib/chart-demo-data"
import { CodeSnippet } from "@/components/code-snippet"

const USAGE_CODE = `import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

<ChartContainer config={chartConfig} className="min-h-[240px] w-full">
  <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="mes" tickLine={false} tickMargin={10} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
    <Line dataKey="mobile" type="natural" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
  </LineChart>
</ChartContainer>`

export default function ChartLinha() {
  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Chart (Linha)</CardTitle>
          <CardDescription>LineChart do Recharts via ChartContainer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartContainer config={chartConfig} className="min-h-[240px] w-full">
            <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="mes" tickLine={false} tickMargin={10} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
              <Line dataKey="mobile" type="natural" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
          <CodeSnippet code={USAGE_CODE} />
        </CardContent>
      </Card>
    </div>
  )
}
