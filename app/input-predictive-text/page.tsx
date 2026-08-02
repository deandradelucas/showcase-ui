import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PredictiveText } from "@/components/ui/predictive-text-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { PredictiveText } from "@/components/ui/predictive-text-base"

<PredictiveText />`

export default async function InputPredictiveTextPage() {
  const source = readComponentSource("components/ui/predictive-text-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/predictive-text-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Predictive Text
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/predictive-text-base.json"
              description="Input com sugestões de palavra (Tab pra escolher, seta pra direita pra completar), aprende frequência do que você já digitou."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="py-6">
          <PredictiveText />
        </CardContent>
      </Card>
    </div>
  )
}
