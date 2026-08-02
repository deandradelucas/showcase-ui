"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { CodeSnippet } from "@/components/code-snippet"

const USAGE_CODE = `import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

<InteractiveHoverButton>Passe o mouse</InteractiveHoverButton>`

export default function InteractiveHoverButtonPage() {
  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Interactive Hover Button</CardTitle>
          <CardDescription>MagicUI — botão com animação de hover em HTML/CSS puro.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <InteractiveHoverButton>Passe o mouse</InteractiveHoverButton>
          <CodeSnippet code={USAGE_CODE} />
        </CardContent>
      </Card>
    </div>
  )
}
