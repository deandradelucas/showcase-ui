import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Android } from "@/components/ui/android"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Android } from "@/components/ui/android"

<Android className="h-auto w-56" />`

export default async function DeviceAndroidPage() {
  const androidSource = readComponentSource("components/ui/android.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/android.tsx", code: androidSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-md px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Android
            <span className="font-normal text-muted-foreground">— MagicUI</span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="deandradelucas/showcase-ui/android"
              description="Moldura de Android em SVG puro."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <Android className="h-auto w-56" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
