import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PricingWidget } from "@/components/ui/pricing-widget-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { PricingWidget } from "@/components/ui/pricing-widget-base"

<PricingWidget />`

export default async function PriceWidgetPage() {
  const source = readComponentSource("components/ui/pricing-widget-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/pricing-widget-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Pricing Widget
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/pricing-widget-base.json"
              description="Toggle mensal/anual e planos selecionáveis, com o preço animado via number-flow."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <PricingWidget />
        </CardContent>
      </Card>
    </div>
  )
}
