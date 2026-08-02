import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContinuousPagination } from "@/components/ui/continuous-pagination-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { ContinuousPagination } from "@/components/ui/continuous-pagination-base"

<ContinuousPagination totalPages={5} />`

export default async function PaginationContinuousPage() {
  const source = readComponentSource("components/ui/continuous-pagination-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/continuous-pagination-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Continuous Pagination
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/continuous-pagination-base.json"
              description="Paginação numérica com setas e página ativa destacada por layout animation."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <ContinuousPagination totalPages={5} />
        </CardContent>
      </Card>
    </div>
  )
}
