import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ChartAreaBklitDemo from "@/components/chart-area-bklit-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import AreaChart, { Area } from "@/components/charts/area-chart"
import { Grid } from "@/components/charts/grid"
import { XAxis } from "@/components/charts/x-axis"
import { ChartTooltip } from "@/components/charts/tooltip"

<AreaChart data={data} xDataKey="date">
  <Grid horizontal />
  <Area dataKey="value" />
  <XAxis />
  <ChartTooltip />
</AreaChart>`

export default async function ChartAreaBklitPage() {
  const coreSource = readComponentSource("components/charts/area-chart.tsx")
  const demoSource = readComponentSource("components/chart-area-bklit-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/charts/area-chart.tsx", code: coreSource },
    { path: "components/chart-area-bklit-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Area Chart
            <span className="text-sm font-normal text-muted-foreground">
              — Bklit
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@bklit/area-chart"
              description="Gráfico de área composável (visx/d3) com preenchimento em gradiente e animação de revelação. Depende de outros ~15 arquivos internos (grid, eixo, tooltip, animação)."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <ChartAreaBklitDemo />
        </CardContent>
      </Card>
    </div>
  )
}
