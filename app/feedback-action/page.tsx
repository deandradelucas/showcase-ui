import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FeedbackAction } from "@/components/ui/feedback-action-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FeedbackAction } from "@/components/ui/feedback-action-base"

<FeedbackAction />`

export default async function FeedbackActionPage() {
  const source = readComponentSource("components/ui/feedback-action-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/feedback-action-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Feedback Action
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/feedback-action-base.json"
              description="Estado de erro com botão de retry; ao clicar, anima pra 'Syncing' e volta ao erro depois de um tempo (simulado)."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <FeedbackAction />
        </CardContent>
      </Card>
    </div>
  )
}
