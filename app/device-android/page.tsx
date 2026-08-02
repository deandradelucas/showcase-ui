"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Android } from "@/components/ui/android"

export default function DeviceAndroidPage() {
  return (
    <div className="mx-auto w-full max-w-md px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Android</CardTitle>
          <CardDescription>MagicUI — moldura de Android em SVG puro.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Android className="h-auto w-56" />
        </CardContent>
      </Card>
    </div>
  )
}
