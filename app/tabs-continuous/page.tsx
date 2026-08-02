import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContinuousTabs } from "@/components/ui/continuous-tabs-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ContinuousTabs } from "@/components/ui/continuous-tabs-base"

<ContinuousTabs />`

export default async function TabsContinuousPage() {
  const source = readComponentSource("components/ui/continuous-tabs-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/continuous-tabs-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Continuous Tabs
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/continuous-tabs-base.json"
              description="Tabs com pílula ativa que desliza continuamente entre as opções."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <ContinuousTabs />
        </CardContent>
      </Card>
    </div>
  )
}
