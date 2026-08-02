import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Iphone } from "@/components/ui/iphone"
import { Android } from "@/components/ui/android"
import { CodeSnippet } from "@/components/code-snippet"

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
          <CodeSnippet code={USAGE_CODE} />
        </CardContent>
      </Card>
    </div>
  )
}
