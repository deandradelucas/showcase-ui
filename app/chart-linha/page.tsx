import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartLinhaDemo } from "@/components/demos/chart-linha-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

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

export default async function ChartLinha() {
  const chartSource = readComponentSource("components/ui/chart.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/chart.tsx", code: chartSource },
    { path: "uso (LineChart)", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Chart (Linha)
            <span className="font-normal text-muted-foreground">— Recharts</span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="chart"
              description="LineChart via ChartContainer."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartLinhaDemo />
        </CardContent>
      </Card>
    </div>
  )
}
