import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartBarraDemo } from "@/components/demos/chart-barra-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

<ChartContainer config={chartConfig} className="min-h-[240px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="mes" tickLine={false} tickMargin={10} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>`

export default async function ChartBarra() {
  const chartSource = readComponentSource("components/ui/chart.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/chart.tsx", code: chartSource },
    { path: "uso (BarChart)", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Chart (Barra)</CardTitle>
          <CardDescription>BarChart do Recharts via ChartContainer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartBarraDemo />
          <ViewCode install="chart" files={files} />
        </CardContent>
      </Card>
    </div>
  )
}
