import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FocusCardsDemo from "@/components/focus-cards-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FocusCards } from "@/components/ui/focus-cards"

<FocusCards cards={[{ title: "Forest Adventure", src: "/forest.jpg" }]} />`

export default async function FocusCardsPage() {
  const coreSource = readComponentSource("components/ui/focus-cards.tsx")
  const demoSource = readComponentSource("components/focus-cards-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/focus-cards.tsx", code: coreSource },
    { path: "components/focus-cards-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Focus Cards
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/focus-cards-demo"
              description="Grade de cards de imagem; passar o mouse num deles borra e reduz os outros."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <FocusCardsDemo />
        </CardContent>
      </Card>
    </div>
  )
}
