import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DrawSignatureComponent } from "@/components/ui/draw-signature"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { DrawSignatureComponent } from "@/components/ui/draw-signature"

<DrawSignatureComponent />`

export default async function InputDrawSignaturePage() {
  const source = readComponentSource("components/ui/draw-signature.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/draw-signature.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Draw Signature
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/draw-signature.json"
              description="Fluxo de assinatura desenhada à mão num canvas, com animação de transição entre etapas."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-72 items-center justify-center">
          <DrawSignatureComponent />
        </CardContent>
      </Card>
    </div>
  )
}
