import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TimedUndoAction } from "@/components/ui/timed-undo-action"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { TimedUndoAction } from "@/components/ui/timed-undo-action"

<TimedUndoAction />`

export default async function ButtonDeletePage() {
  const source = readComponentSource("components/ui/timed-undo-action.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/timed-undo-action.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Delete Button
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/timed-undo-action.json"
              description="Botão de deletar com contagem regressiva e opção de desfazer, animado com motion."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <TimedUndoAction />
        </CardContent>
      </Card>
    </div>
  )
}
