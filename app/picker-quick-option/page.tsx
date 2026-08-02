import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { OptionPicker } from "@/components/ui/quick-option-picker-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { OptionPicker } from "@/components/ui/quick-option-picker-base"

<OptionPicker />`

export default async function PickerQuickOptionPage() {
  const source = readComponentSource("components/ui/quick-option-picker-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/quick-option-picker-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Quick Option Picker
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/quick-option-picker-base.json"
              description="Menu que abre pra cima em perspectiva 3D pra trocar rápido entre opções (ex.: visibilidade)."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-40 items-center justify-center">
          <OptionPicker />
        </CardContent>
      </Card>
    </div>
  )
}
