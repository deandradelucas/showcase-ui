import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TextGenerateEffectDemo from "@/components/text-generate-effect-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

<TextGenerateEffect words="Seu texto aqui, palavra por palavra." />`

export default async function TextGenerateEffectPage() {
  const coreSource = readComponentSource("components/ui/text-generate-effect.tsx")
  const demoSource = readComponentSource("components/text-generate-effect-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/text-generate-effect.tsx", code: coreSource },
    { path: "components/text-generate-effect-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Text Generate Effect
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/text-generate-effect-demo"
              description="Texto que aparece palavra por palavra, com blur inicial, como se estivesse sendo gerado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="py-6">
          <TextGenerateEffectDemo />
        </CardContent>
      </Card>
    </div>
  )
}
