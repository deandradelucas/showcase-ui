"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Iphone } from "@/components/ui/iphone"

const USAGE_CODE = `import { Iphone } from "@/components/ui/iphone"

<Iphone className="mx-auto max-w-56" src="/screenshot.png" />`

export default function DeviceIphonePage() {
  const [copied, setCopied] = useState(false)

  async function copiarCodigo() {
    try {
      await navigator.clipboard.writeText(USAGE_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard indisponível (permissão negada, contexto não seguro, etc.)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>iPhone</CardTitle>
          <CardDescription>MagicUI — moldura de iPhone em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Iphone className="mx-auto max-w-56" />
          <div className="relative">
            <pre className="overflow-x-auto rounded-lg bg-muted p-3 pr-10 text-xs text-muted-foreground">
              <code>{USAGE_CODE}</code>
            </pre>
            <Button
              variant="ghost"
              size="icon-xs"
              className="absolute top-2 right-2"
              onClick={copiarCodigo}
            >
              {copied ? <Check /> : <Copy />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
