import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartPizzaDemo } from "@/components/demos/chart-pizza-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"

const USAGE_CODE = `import { Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

<ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[300px] w-full">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
    <Pie data={pieChartData} dataKey="visitantes" nameKey="navegador" />
  </PieChart>
</ChartContainer>`

export default function ChartPizza() {
  const chartSource = readComponentSource("components/ui/chart.tsx")

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Chart (Pizza)</CardTitle>
          <CardDescription>PieChart do Recharts via ChartContainer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartPizzaDemo />
          <ViewCode
            install="chart"
            files={[
              { path: "components/ui/chart.tsx", code: chartSource },
              { path: "uso (PieChart)", code: USAGE_CODE },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
