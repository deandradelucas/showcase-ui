import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Android } from "@/components/ui/android"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"

const USAGE_CODE = `import { Android } from "@/components/ui/android"

<Android className="h-auto w-56" />`

export default function DeviceAndroidPage() {
  const androidSource = readComponentSource("components/ui/android.tsx")

  return (
    <div className="mx-auto w-full max-w-md px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Android</CardTitle>
          <CardDescription>MagicUI — moldura de Android em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <Android className="h-auto w-56" />
          </div>
          <ViewCode
            install="deandradelucas/showcase-ui/android"
            files={[
              { path: "components/ui/android.tsx", code: androidSource },
              { path: "uso", code: USAGE_CODE },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
