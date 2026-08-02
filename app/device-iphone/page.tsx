import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Iphone } from "@/components/ui/iphone"
import { CodeSnippet } from "@/components/code-snippet"

const USAGE_CODE = `import { Iphone } from "@/components/ui/iphone"

<Iphone className="mx-auto max-w-56" src="/screenshot.png" />`

export default function DeviceIphonePage() {
  return (
    <div className="mx-auto w-full max-w-md px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>iPhone</CardTitle>
          <CardDescription>MagicUI — moldura de iPhone em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Iphone className="mx-auto max-w-56" />
          <CodeSnippet code={USAGE_CODE} />
        </CardContent>
      </Card>
    </div>
  )
}
