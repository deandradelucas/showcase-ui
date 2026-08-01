import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextRequest, NextResponse } from "next/server"
import { checkRegistryAuth } from "@/lib/registry-auth"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const unauthorized = checkRegistryAuth(request)
  if (unauthorized) return unauthorized

  const { name: rawName } = await params
  const name = rawName.replace(/\.json$/, "")
  const filePath = path.join(process.cwd(), ".registry-build", "r", `${name}.json`)

  try {
    const file = await readFile(filePath, "utf-8")
    return new NextResponse(file, {
      headers: { "content-type": "application/json" },
    })
  } catch {
    return NextResponse.json({ error: "Item not found" }, { status: 404 })
  }
}
