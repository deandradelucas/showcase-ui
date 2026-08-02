import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ViewOnMap } from "@/components/ui/view-on-map"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ViewOnMap } from "@/components/ui/view-on-map"

<ViewOnMap address="Boston Public Garden" />`

export default async function MapViewOnMapPage() {
  const source = readComponentSource("components/ui/view-on-map.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/view-on-map.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            View on Map
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/view-on-map.json"
              description="Pill que expande num mapa embutido do Google Maps (sem precisar de API key)."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex min-h-96 items-center justify-center">
          <ViewOnMap />
        </CardContent>
      </Card>
    </div>
  )
}
