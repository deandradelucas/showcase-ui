import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ChangeablePricingSection, { type Plan } from "@/components/ui/changeable-pricing-section"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Pra quem está começando",
    priceMonthly: "R$ 0",
    priceYearly: "R$ 0",
    featuresLabel: "Inclui",
    features: [
      { text: "Até 3 projetos" },
      { text: "1 usuário" },
      { text: "Suporte por e-mail" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Pra times em crescimento",
    priceMonthly: "R$ 49",
    priceYearly: "R$ 39",
    badge: "Popular",
    featuresLabel: "Tudo do Starter, mais",
    features: [
      { text: "Projetos ilimitados" },
      { text: "Até 10 usuários" },
      { text: "Suporte prioritário", hasInfo: true },
      { text: "Analytics avançado" },
    ],
  },
]

const USAGE_CODE = `import ChangeablePricingSection from "@/components/ui/changeable-pricing-section"

<ChangeablePricingSection plans={plans} defaultPlanId="pro" />`

export default async function PriceChangeablePage() {
  const source = readComponentSource("components/ui/changeable-pricing-section.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/changeable-pricing-section.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Changeable Pricing
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/changeable-pricing-section.json"
              description="Seleção de plano com toggle mensal/anual e detalhes que expandem no plano escolhido."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <ChangeablePricingSection plans={PLANS} defaultPlanId="pro" />
        </CardContent>
      </Card>
    </div>
  )
}
