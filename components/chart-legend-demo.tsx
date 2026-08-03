"use client"

import {
  Legend,
  LegendItem,
  LegendMarker,
  LegendLabel,
  LegendValue,
  LegendProgress,
} from "@/components/charts/legend/index"

const ITEMS = [
  { label: "Vendas Diretas", value: 720, maxValue: 1000, color: "var(--chart-1)" },
  { label: "Parcerias", value: 410, maxValue: 1000, color: "var(--chart-2)" },
  { label: "Indicações", value: 260, maxValue: 1000, color: "var(--chart-3)" },
]

export default function ChartLegendDemo() {
  return (
    <div className="w-full max-w-sm px-4 py-8">
      <Legend items={ITEMS} title="Canais de aquisição">
        <LegendItem>
          <LegendMarker />
          <LegendLabel />
          <LegendValue />
          <LegendProgress />
        </LegendItem>
      </Legend>
    </div>
  )
}
