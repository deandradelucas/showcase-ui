import type { ChartConfig } from "@/components/ui/chart"

export const chartData = [
  { mes: "Jan", desktop: 186, mobile: 80 },
  { mes: "Fev", desktop: 305, mobile: 200 },
  { mes: "Mar", desktop: 237, mobile: 120 },
  { mes: "Abr", desktop: 73, mobile: 190 },
]

export const chartConfig = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#60a5fa" },
} satisfies ChartConfig

export const pieChartData = [
  { navegador: "chrome", visitantes: 275, fill: "var(--color-chrome)" },
  { navegador: "safari", visitantes: 200, fill: "var(--color-safari)" },
  { navegador: "firefox", visitantes: 187, fill: "var(--color-firefox)" },
  { navegador: "edge", visitantes: 173, fill: "var(--color-edge)" },
  { navegador: "outros", visitantes: 90, fill: "var(--color-outros)" },
]

export const pieChartConfig = {
  visitantes: { label: "Visitantes" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  outros: { label: "Outros", color: "var(--chart-5)" },
} satisfies ChartConfig
