import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartRadarDemo } from "@/components/demos/chart-radar-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"

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

export default function ChartRadar() {
  const chartSource = readComponentSource("components/ui/chart.tsx")

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Chart (Radar)</CardTitle>
          <CardDescription>RadarChart do Recharts via ChartContainer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ChartRadarDemo />
          <ViewCode
            install="chart"
            files={[
              { path: "components/ui/chart.tsx", code: chartSource },
              { path: "uso (RadarChart)", code: USAGE_CODE },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
