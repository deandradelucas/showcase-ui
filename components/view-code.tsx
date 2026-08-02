"use client"

import { useState } from "react"
import { Check, Code2, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PackageManager = "pnpm" | "npm" | "yarn" | "bun"

const RUNNERS: Record<PackageManager, string> = {
  pnpm: "pnpm dlx",
  npm: "npx",
  yarn: "yarn dlx",
  bun: "bunx",
}

function buildCommand(pm: PackageManager, args: string) {
  return `${RUNNERS[pm]} shadcn@latest add ${args}`
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  async function copiar() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard indisponível (permissão negada, contexto não seguro, etc.)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      className="absolute top-2 right-2"
      onClick={copiar}
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  )
}

type ViewCodeFile = {
  path: string
  code: string
}

export function ViewCode({
  install,
  files,
}: {
  install: string
  files: ViewCodeFile[]
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" size="sm">
            <Code2 />
            View Code
          </Button>
        }
      />
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Installation</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
          </TabsList>
          {(Object.keys(RUNNERS) as PackageManager[]).map((pm) => {
            const command = buildCommand(pm, install)
            return (
              <TabsContent key={pm} value={pm}>
                <div className="relative">
                  <pre className="overflow-x-auto rounded-lg bg-muted p-3 pr-10 text-xs text-muted-foreground">
                    <code>{command}</code>
                  </pre>
                  <CopyButton text={command} />
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
        <div className="space-y-4">
          <h3 className="font-heading text-sm font-medium">Code</h3>
          {files.map((file) => (
            <div key={file.path} className="space-y-1.5">
              <p className="font-mono text-xs text-muted-foreground">
                {file.path}
              </p>
              <div className="relative">
                <pre className="max-h-96 overflow-auto rounded-lg bg-muted p-3 pr-10 text-xs text-muted-foreground">
                  <code>{file.code}</code>
                </pre>
                <CopyButton text={file.code} />
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
