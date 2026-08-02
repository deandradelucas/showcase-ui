import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Iphone } from "@/components/ui/iphone"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Iphone } from "@/components/ui/iphone"

<Iphone className="mx-auto max-w-56" src="/screenshot.png" />`

export default async function DeviceIphonePage() {
  const iphoneSource = readComponentSource("components/ui/iphone.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/iphone.tsx", code: iphoneSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-md px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>iPhone</CardTitle>
          <CardDescription>MagicUI — moldura de iPhone em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <Iphone className="max-w-56" />
          </div>
          <ViewCode install="deandradelucas/showcase-ui/iphone" files={files} />
        </CardContent>
      </Card>
    </div>
  )
}
