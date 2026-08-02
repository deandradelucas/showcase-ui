import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Safari } from "@/components/ui/safari"
import { CodeSnippet } from "@/components/code-snippet"

const USAGE_CODE = `import { Safari } from "@/components/ui/safari"

<Safari url="showcase-ui.dev" className="w-full" />`

export default function DeviceSafariPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Safari</CardTitle>
          <CardDescription>MagicUI — moldura de janela do Safari em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Safari url="showcase-ui.dev" className="w-full" />
          <CodeSnippet code={USAGE_CODE} />
        </CardContent>
      </Card>
    </div>
  )
}
