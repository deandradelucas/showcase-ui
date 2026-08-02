import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShowQr } from "@/components/ui/show-qr-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ShowQr } from "@/components/ui/show-qr-base"

<ShowQr value="https://showcase-ui.dev" />`

export default async function ShareQrPage() {
  const source = readComponentSource("components/ui/show-qr-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/show-qr-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Show QR
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/show-qr-base.json"
              description="Botão que expande num QR code do link, com opção de copiar."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <ShowQr value="https://showcase-ui.dev" />
        </CardContent>
      </Card>
    </div>
  )
}
