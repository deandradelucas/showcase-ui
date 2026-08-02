import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartRadarDemo } from "@/components/demos/chart-radar-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

<ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px] w-full">
  <RadarChart data={chartData}>
    <ChartTooltip content={<ChartTooltipContent />} />
    <PolarAngleAxis dataKey="mes" />
    <PolarGrid />
    <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
  </RadarChart>
</ChartContainer>`

export default async function ChartRadar() {
  const chartSource = readComponentSource("components/ui/chart.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/chart.tsx", code: chartSource },
    { path: "uso (RadarChart)", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Chart (Radar)</CardTitle>
          <CardDescription>RadarChart do Recharts via ChartContainer.</CardDescription>
          <CardAction>
            <ViewCode install="chart" files={files} />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartRadarDemo />
        </CardContent>
      </Card>
    </div>
  )
}
