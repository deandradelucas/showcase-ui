import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PinItemComponent } from "@/components/ui/pin-item"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { PinItemComponent } from "@/components/ui/pin-item"

<PinItemComponent />`

export default async function ListPinItemPage() {
  const source = readComponentSource("components/ui/pin-item.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/pin-item.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Pin Item
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/pin-item.json"
              description="Lista de lugares onde fixar um item o move pra uma seção separada, com layout animado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <PinItemComponent />
        </CardContent>
      </Card>
    </div>
  )
}
