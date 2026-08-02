import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ListStack } from "@/components/ui/list-stack-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ListStack } from "@/components/ui/list-stack-base"

<ListStack />`

export default async function ListStackPage() {
  const source = readComponentSource("components/ui/list-stack-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/list-stack-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            List Stack
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/list-stack-base.json"
              description="Pilha de cards em 3D que se expande numa lista ao clicar em Show."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <ListStack />
        </CardContent>
      </Card>
    </div>
  )
}
