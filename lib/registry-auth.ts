import { NextRequest, NextResponse } from "next/server"

/**
 * Registry autenticado por token bearer (docs/registry/authentication).
 * REGISTRY_TOKEN não configurado = registry fica público (default de dev).
 */
export function checkRegistryAuth(request: NextRequest) {
  const expected = process.env.REGISTRY_TOKEN
  if (!expected) return null

  const auth = request.headers.get("authorization")
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null

  if (token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return null
}
