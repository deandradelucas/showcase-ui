import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ChartProfitLossDemo from "@/components/chart-profit-loss-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import LineChart from "@/components/charts/line-chart"
import { ProfitLossLine } from "@/components/charts/profit-loss-line"
import { ProfitLossLegend } from "@/components/charts/profit-loss-legend"
import { Grid } from "@/components/charts/grid"
import { XAxis } from "@/components/charts/x-axis"
import { ChartTooltip } from "@/components/charts/tooltip"

<ProfitLossLegend />
<LineChart data={data} xDataKey="date">
  <Grid horizontal />
  <ProfitLossLine dataKey="value" />
  <XAxis />
  <ChartTooltip />
</LineChart>`

export default async function ChartProfitLossPage() {
  const coreSource = readComponentSource("components/charts/profit-loss-line.tsx")
  const demoSource = readComponentSource("components/chart-profit-loss-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/charts/profit-loss-line.tsx", code: coreSource },
    { path: "components/chart-profit-loss-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Profit/Loss Line
            <span className="text-sm font-normal text-muted-foreground">
              — Bklit
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@bklit/profit-loss-line"
              description="Linha de gráfico com segmentos coloridos por sinal (verde/vermelho) para valores positivos e negativos."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <ChartProfitLossDemo />
        </CardContent>
      </Card>
    </div>
  )
}
