import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RevealAndCopy } from "@/components/ui/reveal-copy-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { RevealAndCopy } from "@/components/ui/reveal-copy-base"

<RevealAndCopy cardNumber="4242 4242 4242 4242" />`

export default async function RevealCopyPage() {
  const source = readComponentSource("components/ui/reveal-copy-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/reveal-copy-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Reveal &amp; Copy
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/reveal-copy-base.json"
              description="Número mascarado que revela por alguns segundos e copia pro clipboard."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <RevealAndCopy cardNumber="4242 4242 4242 4242" />
        </CardContent>
      </Card>
    </div>
  )
}
