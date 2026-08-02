import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TaskWidget, type TaskData } from "@/components/ui/task-widget-disclosure"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const TASK: TaskData = {
  title: "Redesign do checkout",
  progress: 60,
  completedCount: 3,
  totalCount: 5,
  priority: "Alta",
  status: "Em andamento",
  subtasks: [
    { id: "1", title: "Wireframe da tela", completed: true },
    { id: "2", title: "Fluxo de pagamento", completed: true },
    { id: "3", title: "Revisão de acessibilidade", completed: true },
    { id: "4", title: "Testes com usuários", completed: false },
    { id: "5", title: "Handoff pro dev", completed: false },
  ],
  assignees: [
    { name: "Ana", avatar: "https://i.pravatar.cc/64?u=ana", color: "" },
    { name: "Bruno", avatar: "https://i.pravatar.cc/64?u=bruno", color: "" },
  ],
}

const USAGE_CODE = `import { TaskWidget } from "@/components/ui/task-widget-disclosure"

<TaskWidget data={task} />`

export default async function DisclosureTaskWidgetPage() {
  const source = readComponentSource("components/ui/task-widget-disclosure.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/task-widget-disclosure.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Task Widget
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/task-widget-disclosure.json"
              description="Card de tarefa que expande em checklist, prioridade, status e responsáveis."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <TaskWidget data={TASK} />
        </CardContent>
      </Card>
    </div>
  )
}
