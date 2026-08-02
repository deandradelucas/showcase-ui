import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FlipButton, FlipButtonFront, FlipButtonBack } from "@/components/animate-ui/components/buttons/flip"

<FlipButton>
  <FlipButtonFront>Passe o mouse</FlipButtonFront>
  <FlipButtonBack>Surpresa!</FlipButtonBack>
</FlipButton>`

export default async function ButtonsFlipPage() {
  const componentSource = readComponentSource("components/animate-ui/components/buttons/flip.tsx")
  const primitiveSource = readComponentSource("components/animate-ui/primitives/buttons/flip.tsx")
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/buttons/flip.tsx", code: componentSource },
    { path: "components/animate-ui/primitives/buttons/flip.tsx", code: primitiveSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Flip Button
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-buttons-flip"
              description="Botão que vira 3D revelando outro texto ao passar o mouse."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <FlipButton>
            <FlipButtonFront>Passe o mouse</FlipButtonFront>
            <FlipButtonBack>Surpresa! 🎉</FlipButtonBack>
          </FlipButton>
        </CardContent>
      </Card>
    </div>
  )
}
