import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ElectricBorderDemo from "@/components/electric-border-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ElectricBorder } from "@/components/ui/electric-border"

<ElectricBorder color="#7df9ff" chaos={4} thickness={2} borderRadius={16}>
  <div className="p-8 text-white">Seu conteúdo aqui</div>
</ElectricBorder>`

export default async function ElectricBorderPage() {
  const coreSource = readComponentSource("components/ui/electric-border.tsx")
  const demoSource = readComponentSource("components/electric-border-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/electric-border.tsx", code: coreSource },
    { path: "components/electric-border-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Electric Border
            <span className="text-sm font-normal text-muted-foreground">
              — Origin Kit
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="electricborder"
              cliCommand="originkit@latest add"
              description="Borda animada em canvas 2D com ruído, imitando um filete de energia elétrica ao redor do conteúdo. Requer login prévio (`originkit login`) — CLI não tem registry público."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <ElectricBorderDemo />
        </CardContent>
      </Card>
    </div>
  )
}
