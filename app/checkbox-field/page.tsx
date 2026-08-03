import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckboxField } from "@/components/ui/checkbox-field"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { CheckboxField } from "@/components/ui/checkbox-field"

<CheckboxField
  label="Aceito os termos de uso"
  description="Você pode revogar o consentimento a qualquer momento."
/>`

export default async function CheckboxFieldPage() {
  const source = readComponentSource("components/ui/checkbox-field.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/checkbox-field.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Checkbox Field
            <span className="text-sm font-normal text-muted-foreground">
              — Matos UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://matos-ui.com/r/checkbox.json"
              description="Checkbox (Base UI) com label, descrição e animação de rabisco riscando o texto ao marcar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="w-full max-w-xs">
            <CheckboxField
              label="Aceito os termos de uso"
              description="Você pode revogar o consentimento a qualquer momento."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
