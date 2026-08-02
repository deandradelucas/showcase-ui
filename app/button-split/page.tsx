import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SplitButton from "@/components/ui/split-button"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import SplitButton from "@/components/ui/split-button"

<SplitButton />`

export default async function ButtonSplitPage() {
  const source = readComponentSource("components/ui/split-button.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/split-button.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Split Button
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/split-button.json"
              description="Botão que se abre em opções ao clicar, animado com motion."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <SplitButton />
        </CardContent>
      </Card>
    </div>
  )
}
