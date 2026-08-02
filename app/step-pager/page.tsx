import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { StepPager } from "@/components/ui/step-pager-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { StepPager } from "@/components/ui/step-pager-base"

<StepPager />`

export default async function StepPagerPage() {
  const source = readComponentSource("components/ui/step-pager-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/step-pager-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Step Pager
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/step-pager-base.json"
              description="Navegação por etapas com setas e ícones, um passo ativo por vez."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <StepPager />
        </CardContent>
      </Card>
    </div>
  )
}
