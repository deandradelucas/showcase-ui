"use client"

import { useState } from "react"
import { FrequencySelector, type FrequencyData } from "@/components/ui/frequency-selector-base"

export function FrequencySelectorDemo() {
  const [value, setValue] = useState<FrequencyData>({ type: "Weekly", subValue: "Mon" })

  return <FrequencySelector value={value} onChange={setValue} />
}
