"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CodeSnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function copiarCodigo() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard indisponível (permissão negada, contexto não seguro, etc.)
    }
  }

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg bg-muted p-3 pr-10 text-xs text-muted-foreground">
        <code>{code}</code>
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
  )
}
