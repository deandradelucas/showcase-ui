import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProgressiveInputStack, type StepData } from "@/components/ui/progressive-input-stack-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const STEPS: StepData[] = [
  { id: "name", label: "Nome", type: "text", placeholder: "Seu nome" },
  { id: "email", label: "E-mail", type: "text", placeholder: "seu@email.com" },
  { id: "notify", label: "Receber notificações", type: "toggle" },
]

const USAGE_CODE = `import { ProgressiveInputStack } from "@/components/ui/progressive-input-stack-base"

<ProgressiveInputStack steps={steps} onSubmit={(data) => console.log(data)} />`

export default async function InputProgressiveStackPage() {
  const source = readComponentSource("components/ui/progressive-input-stack-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/progressive-input-stack-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Progressive Input Stack
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/progressive-input-stack-base.json"
              description="Formulário em pilha: um campo por vez, empilhando os anteriores conforme avança."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <ProgressiveInputStack steps={STEPS} />
        </CardContent>
      </Card>
    </div>
  )
}
