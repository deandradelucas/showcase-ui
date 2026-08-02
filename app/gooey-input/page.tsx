import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import GooeyInputDemo from "@/components/gooey-input-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { GooeyInput } from "@/components/ui/gooey-input"

<GooeyInput placeholder="Buscar..." />`

export default async function GooeyInputPage() {
  const coreSource = readComponentSource("components/ui/gooey-input.tsx")
  const demoSource = readComponentSource("components/gooey-input-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/gooey-input.tsx", code: coreSource },
    { path: "components/gooey-input-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Gooey Input
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/gooey-input-demo"
              description="Campo de busca que expande com efeito 'gooey' (SVG filter) ao clicar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <GooeyInputDemo />
        </CardContent>
      </Card>
    </div>
  )
}
