import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FluidTabs } from "@/components/ui/fluid-tabs-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FluidTabs } from "@/components/ui/fluid-tabs-base"

<FluidTabs />`

export default async function TabsFluidPage() {
  const source = readComponentSource("components/ui/fluid-tabs-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/fluid-tabs-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Fluid Tabs
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/fluid-tabs-base.json"
              description="Tabs com pílula ativa e leve blur na troca, ícone e texto animados juntos."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <FluidTabs />
        </CardContent>
      </Card>
    </div>
  )
}
