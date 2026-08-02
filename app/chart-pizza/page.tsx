import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartPizzaDemo } from "@/components/demos/chart-pizza-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

<ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[300px] w-full">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
    <Pie data={pieChartData} dataKey="visitantes" nameKey="navegador" />
  </PieChart>
</ChartContainer>`

export default async function ChartPizza() {
  const chartSource = readComponentSource("components/ui/chart.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/chart.tsx", code: chartSource },
    { path: "uso (PieChart)", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Chart (Pizza)
            <span className="text-sm font-normal text-muted-foreground">— Recharts</span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="chart"
              description="PieChart via ChartContainer."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartPizzaDemo />
        </CardContent>
      </Card>
    </div>
  )
}
