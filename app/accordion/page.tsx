import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AccordionApp } from "@/components/ui/card-split-accordion"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { AccordionApp } from "@/components/ui/card-split-accordion"

<AccordionApp />`

export default async function AccordionPage() {
  const source = readComponentSource("components/ui/card-split-accordion.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/card-split-accordion.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Accordion
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/card-split-accordion.json"
              description="Accordion com card que se divide e anima com motion, um item aberto por vez."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <AccordionApp />
        </CardContent>
      </Card>
    </div>
  )
}
