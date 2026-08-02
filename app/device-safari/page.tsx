"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Safari } from "@/components/ui/safari"

export default function DeviceSafariPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Safari</CardTitle>
          <CardDescription>MagicUI — moldura de janela do Safari em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent>
          <Safari url="showcase-ui.dev" className="w-full" />
        </CardContent>
      </Card>
    </div>
  )
}
