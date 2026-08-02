import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tags } from "@/components/ui/tags"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Tags } from "@/components/ui/tags"

<Tags />`

export default async function TagsPage() {
  const source = readComponentSource("components/ui/tags.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/tags.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Tags
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/tags.json"
              description="Clique numa tag disponível pra selecioná-la; o item some da lista e entra no chip de selecionados, com layout animado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <Tags />
        </CardContent>
      </Card>
    </div>
  )
}
