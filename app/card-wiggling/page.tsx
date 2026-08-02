import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WigglingCards } from "@/components/ui/wiggling-cards"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { WigglingCards } from "@/components/ui/wiggling-cards"

<WigglingCards />`

export default async function CardWigglingPage() {
  const source = readComponentSource("components/ui/wiggling-cards.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/wiggling-cards.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Wiggling Cards
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/wiggling-cards.json"
              description="Carrossel de cards arrastável, com rotação e blur nos vizinhos, animado com motion."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <WigglingCards />
        </CardContent>
      </Card>
    </div>
  )
}
