import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ChartLegendDemo from "@/components/chart-legend-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Legend, LegendItem, LegendMarker, LegendLabel, LegendValue, LegendProgress } from "@/components/charts/legend/index"

<Legend items={items} title="Canais de aquisição">
  <LegendItem>
    <LegendMarker />
    <LegendLabel />
    <LegendValue />
    <LegendProgress />
  </LegendItem>
</Legend>`

export default async function ChartLegendPage() {
  const coreSource = readComponentSource("components/charts/legend/legend.tsx")
  const demoSource = readComponentSource("components/chart-legend-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/charts/legend/legend.tsx", code: coreSource },
    { path: "components/chart-legend-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Chart Legend
            <span className="text-sm font-normal text-muted-foreground">
              — Bklit
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@bklit/legend"
              description="Legenda composável com marcador, valor e barra de progresso por item, hover sincronizado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <ChartLegendDemo />
        </CardContent>
      </Card>
    </div>
  )
}
