import { highlightCode } from "@/lib/highlight-code"

export async function buildCodeFiles(entries: { path: string; code: string }[]) {
  return Promise.all(
    entries.map(async ({ path, code }) => ({
      path,
      code,
      html: await highlightCode(code, "tsx"),
    }))
  )
}
