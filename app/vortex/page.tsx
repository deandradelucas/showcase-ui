import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import VortexDemo from "@/components/vortex-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Vortex } from "@/components/ui/vortex"

<Vortex backgroundColor="black" className="flex items-center justify-center w-full h-full">
  <h2 className="text-white text-2xl font-bold">Seu conteúdo aqui</h2>
</Vortex>`

export default async function VortexPage() {
  const coreSource = readComponentSource("components/ui/vortex.tsx")
  const demoSource = readComponentSource("components/vortex-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/vortex.tsx", code: coreSource },
    { path: "components/vortex-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Vortex
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/vortex-demo"
              description="Fundo animado com partículas em espiral (simplex noise), tipo hero de fundo de tela."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <VortexDemo />
        </CardContent>
      </Card>
    </div>
  )
}
