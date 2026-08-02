import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FloatingDisclosure, items } from "@/components/ui/floating-disclosure-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FloatingDisclosure, items } from "@/components/ui/floating-disclosure-base"

<FloatingDisclosure items={items} />`

export default async function DisclosureFloatingPage() {
  const source = readComponentSource("components/ui/floating-disclosure-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/floating-disclosure-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Floating Disclosure
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/floating-disclosure-base.json"
              description="Botão de mais opções que abre num menu flutuante acima dele."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <FloatingDisclosure items={items} />
        </CardContent>
      </Card>
    </div>
  )
}
