import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PlayfulTodolist } from "@/components/animate-ui/components/community/playful-todolist"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { PlayfulTodolist } from "@/components/animate-ui/components/community/playful-todolist"

<PlayfulTodolist />`

export default async function CommunityPlayfulTodolistPage() {
  const source = readComponentSource(
    "components/animate-ui/components/community/playful-todolist.tsx"
  )
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/community/playful-todolist.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Playful Todolist
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-community-playful-todolist"
              description="Checklist com um risco desenhado à mão (SVG animado) passando por cima do item ao marcar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="py-6">
          <PlayfulTodolist />
        </CardContent>
      </Card>
    </div>
  )
}
