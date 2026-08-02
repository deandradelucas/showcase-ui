import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LayoutGridDemo from "@/components/layout-grid-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { LayoutGrid } from "@/components/ui/layout-grid"

<LayoutGrid cards={cards} />`

export default async function LayoutGridPage() {
  const coreSource = readComponentSource("components/ui/layout-grid.tsx")
  const demoSource = readComponentSource("components/layout-grid-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/layout-grid.tsx", code: coreSource },
    { path: "components/layout-grid-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Layout Grid
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/layout-grid-demo"
              description="Clique num card do grid pra expandir em tela cheia com mais detalhes."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <LayoutGridDemo />
        </CardContent>
      </Card>
    </div>
  )
}
