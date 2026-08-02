import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
        <CardHeader>
          <CardTitle>Interactive Hover Button</CardTitle>
          <CardDescription>MagicUI — botão com animação de hover em HTML/CSS puro.</CardDescription>
          <CardAction>
            <ViewCode
              install="deandradelucas/showcase-ui/interactive-hover-button"
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
