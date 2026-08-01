import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextRequest, NextResponse } from "next/server"
import { checkRegistryAuth } from "@/lib/registry-auth"

type RegistryItem = {
  name: string
  type: string
  title?: string
  description?: string
  [key: string]: unknown
}

async function loadRegistry() {
  const file = await readFile(path.join(process.cwd(), "registry.json"), "utf-8")
  return JSON.parse(file) as { name: string; homepage: string; items: RegistryItem[] }
}

async function searchItems({
  query,
  types,
  limit,
  offset,
}: {
  query: string | null
  types: string[] | undefined
  limit: number
  offset: number
}) {
  const registry = await loadRegistry()

  const filtered = registry.items.filter((item) => {
    const matchesType = !types || types.includes(item.type)
    const haystack = `${item.name} ${item.title ?? ""} ${item.description ?? ""}`.toLowerCase()
    const matchesQuery = !query || haystack.includes(query.toLowerCase())
    return matchesType && matchesQuery
  })

  const total = filtered.length
  const items = filtered.slice(offset, offset + limit).map((item) => ({
    name: item.name,
    type: item.type,
    description: item.description,
  }))

  return { registry, items, total }
}

export async function GET(request: NextRequest) {
  const unauthorized = checkRegistryAuth(request)
  if (unauthorized) return unauthorized

  const { searchParams } = request.nextUrl

  const query = searchParams.get("q")
  const types = searchParams.get("type")?.split(",")
  const limit = Number(searchParams.get("limit") ?? 100)
  const offset = Number(searchParams.get("offset") ?? 0)

  const { registry, items, total } = await searchItems({ query, types, limit, offset })

  return NextResponse.json({
    name: registry.name,
    homepage: registry.homepage,
    items,
    pagination: {
      total,
      offset,
      limit,
      hasMore: offset + limit < total,
    },
  })
}
