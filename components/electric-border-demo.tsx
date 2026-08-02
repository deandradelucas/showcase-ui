"use client"

import { ElectricBorder } from "@/components/ui/electric-border"

export default function ElectricBorderDemo() {
  return (
    <div className="flex h-72 w-full items-center justify-center bg-black p-8">
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={4}
        thickness={2}
        borderRadius={16}
        style={{ padding: "2rem", width: 260, height: 140 }}
      >
        <div className="flex h-full w-full items-center justify-center text-center text-lg font-semibold text-white">
          Electric Border
        </div>
      </ElectricBorder>
    </div>
  )
}
