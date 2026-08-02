import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InlineOverflow } from "@/components/ui/inline-overflow"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const VISIBLE_ACTIONS = [{ label: "Editar" }, { label: "Duplicar" }]
const HIDDEN_ACTIONS = [{ label: "Arquivar" }, { label: "Excluir" }, { label: "Compartilhar" }]

const USAGE_CODE = `import { InlineOverflow } from "@/components/ui/inline-overflow"

<InlineOverflow
  visibleActions={[{ label: "Editar" }, { label: "Duplicar" }]}
  hiddenActions={[{ label: "Arquivar" }, { label: "Excluir" }]}
/>`

export default async function DisclosureInlineOverflowPage() {
  const source = readComponentSource("components/ui/inline-overflow.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/inline-overflow.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Inline Overflow
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/inline-overflow.json"
              description="Barra de ações que revela as opções extras ao clicar nos três pontinhos."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <InlineOverflow visibleActions={VISIBLE_ACTIONS} hiddenActions={HIDDEN_ACTIONS} />
        </CardContent>
      </Card>
    </div>
  )
}
