import fs from "node:fs"
import path from "node:path"

export function readComponentSource(relativePath: string) {
  return fs
    .readFileSync(path.join(/* turbopackIgnore: true */ process.cwd(), relativePath), "utf-8")
    .trim()
}
