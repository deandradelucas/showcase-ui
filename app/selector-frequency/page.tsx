import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FrequencySelectorDemo } from "@/components/demos/frequency-selector-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FrequencySelector } from "@/components/ui/frequency-selector-base"

const [value, setValue] = useState({ type: "Weekly", subValue: "Mon" })

<FrequencySelector value={value} onChange={setValue} />`

export default async function SelectorFrequencyPage() {
  const source = readComponentSource("components/ui/frequency-selector-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/frequency-selector-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Frequency Selector
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/frequency-selector-base.json"
              description="Clique pra escolher a frequência (diária, semanal, mensal, anual) e o sub-valor (dia da semana, do mês etc.)."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <FrequencySelectorDemo />
        </CardContent>
      </Card>
    </div>
  )
}
