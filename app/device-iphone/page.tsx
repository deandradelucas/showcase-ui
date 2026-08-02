"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Iphone } from "@/components/ui/iphone"

export default function DeviceIphonePage() {
  return (
    <div className="mx-auto w-full max-w-md px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>iPhone</CardTitle>
          <CardDescription>MagicUI — moldura de iPhone em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent>
          <Iphone className="mx-auto max-w-56" />
        </CardContent>
      </Card>
    </div>
  )
}
