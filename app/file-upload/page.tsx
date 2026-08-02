import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FileUploadDemo from "@/components/file-upload-demo"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { FileUpload } from "@/components/ui/file-upload"

<FileUpload onChange={(files) => console.log(files)} />`

export default async function FileUploadPage() {
  const coreSource = readComponentSource("components/ui/file-upload.tsx")
  const demoSource = readComponentSource("components/file-upload-demo.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/file-upload.tsx", code: coreSource },
    { path: "components/file-upload-demo.tsx", code: demoSource },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            File Upload
            <span className="text-sm font-normal text-muted-foreground">
              — Aceternity UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@aceternity/file-upload-demo"
              description="Área de drag-and-drop (react-dropzone) com efeito de grid animado no fundo."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <FileUploadDemo />
        </CardContent>
      </Card>
    </div>
  )
}
