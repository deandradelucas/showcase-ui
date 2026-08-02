import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Files,
  FolderItem,
  FolderTrigger,
  FolderContent,
  FileItem,
  SubFiles,
} from "@/components/animate-ui/components/radix/files"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { Files, FolderItem, FolderTrigger, FolderContent, FileItem, SubFiles } from "@/components/animate-ui/components/radix/files"

<Files defaultOpen={["app"]}>
  <FolderItem value="app">
    <FolderTrigger gitStatus="modified">app</FolderTrigger>
    <FolderContent>
      <SubFiles>
        <FileItem gitStatus="untracked">page.tsx</FileItem>
        <FileItem>layout.tsx</FileItem>
      </SubFiles>
    </FolderContent>
  </FolderItem>
</Files>`

export default async function FilesTreePage() {
  const componentSource = readComponentSource("components/animate-ui/components/radix/files.tsx")
  const primitiveSource = readComponentSource("components/animate-ui/primitives/radix/files.tsx")
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/radix/files.tsx", code: componentSource },
    { path: "components/animate-ui/primitives/radix/files.tsx", code: primitiveSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Files
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-radix-files"
              description="Árvore de arquivos estilo VS Code, com status de git e animação ao expandir pastas."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <Files defaultOpen={["app", "components"]}>
            <FolderItem value="app">
              <FolderTrigger gitStatus="modified">app</FolderTrigger>
              <FolderContent>
                <SubFiles>
                  <FileItem gitStatus="untracked">page.tsx</FileItem>
                  <FileItem>layout.tsx</FileItem>
                </SubFiles>
              </FolderContent>
            </FolderItem>
            <FolderItem value="components">
              <FolderTrigger>components</FolderTrigger>
              <FolderContent>
                <SubFiles>
                  <FileItem gitStatus="deleted">old-button.tsx</FileItem>
                  <FileItem>card.tsx</FileItem>
                </SubFiles>
              </FolderContent>
            </FolderItem>
            <FileItem>package.json</FileItem>
          </Files>
        </CardContent>
      </Card>
    </div>
  )
}
