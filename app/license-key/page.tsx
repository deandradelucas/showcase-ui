import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LicenceKey from "@/components/ui/license-key-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import LicenceKey from "@/components/ui/license-key-base"

<LicenceKey />`

export default async function LicenseKeyPage() {
  const source = readComponentSource("components/ui/license-key-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/license-key-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            License Key
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/license-key-base.json"
              description="Pill que expande num campo de chave de licença ao clicar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-32 items-center justify-center">
          <LicenceKey />
        </CardContent>
      </Card>
    </div>
  )
}
