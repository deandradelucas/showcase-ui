import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SwipeableStackCards from "@/components/ui/revealing-cards-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import SwipeableStackCards from "@/components/ui/revealing-cards-base"

<SwipeableStackCards />`

export default async function CardRevealingStackPage() {
  const source = readComponentSource("components/ui/revealing-cards-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/revealing-cards-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Revealing Stack
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/revealing-cards-base.json"
              description="Pilha de cards de pagamento; arraste um pra fora pra mandá-lo pro fundo da pilha."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-96 items-center justify-center">
          <SwipeableStackCards />
        </CardContent>
      </Card>
    </div>
  )
}
