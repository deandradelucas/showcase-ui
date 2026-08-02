import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Iphone } from "@/components/ui/iphone"
import { Android } from "@/components/ui/android"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"

const USAGE_CODE = `import { Iphone } from "@/components/ui/iphone"
import { Android } from "@/components/ui/android"

<div className="flex flex-wrap items-center justify-center gap-16">
  <Iphone
    className="max-w-56 -rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105"
    src="/mockup-screenshot.jpg"
  />
  <Android
    className="h-auto w-56 rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105"
    src="/mockup-screenshot.jpg"
  />
</div>`

export default function DeviceMockupPage() {
  const iphoneSource = readComponentSource("components/ui/iphone.tsx")
  const androidSource = readComponentSource("components/ui/android.tsx")

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>iPhone + Android</CardTitle>
          <CardDescription>
            Iphone e Android reais do projeto, lado a lado, com rotação leve e hover — mesma ideia do mockup em
            CSS puro, só que com os componentes de verdade.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-16 py-8">
            <Iphone
              className="max-w-56 -rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105"
              src="/mockup-screenshot.jpg"
            />
            <Android
              className="h-auto w-56 rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105"
              src="/mockup-screenshot.jpg"
            />
          </div>
          <ViewCode
            install="deandradelucas/showcase-ui/iphone deandradelucas/showcase-ui/android"
            files={[
              { path: "components/ui/iphone.tsx", code: iphoneSource },
              { path: "components/ui/android.tsx", code: androidSource },
              { path: "uso", code: USAGE_CODE },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )
}
