import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

<InteractiveHoverButton>Passe o mouse</InteractiveHoverButton>`

export default async function InteractiveHoverButtonPage() {
  const source = readComponentSource("components/ui/interactive-hover-button.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/interactive-hover-button.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Interactive Hover Button
            <span className="text-sm font-normal text-muted-foreground">— MagicUI</span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="deandradelucas/showcase-ui/interactive-hover-button"
              description="Botão com animação de hover em HTML/CSS puro."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <InteractiveHoverButton>Passe o mouse</InteractiveHoverButton>
        </CardContent>
      </Card>
    </div>
  )
}
