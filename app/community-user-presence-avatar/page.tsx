import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UserPresenceAvatar } from "@/components/animate-ui/components/community/user-presence-avatar"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const USAGE_CODE = `import { UserPresenceAvatar } from "@/components/animate-ui/components/community/user-presence-avatar"

<UserPresenceAvatar />`

export default async function CommunityUserPresenceAvatarPage() {
  const source = readComponentSource(
    "components/animate-ui/components/community/user-presence-avatar.tsx"
  )
  const files = await buildCodeFiles([
    { path: "components/animate-ui/components/community/user-presence-avatar.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            User Presence Avatar
            <span className="text-sm font-normal text-muted-foreground">
              — Animate UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="@animate-ui/components-community-user-presence-avatar"
              description="Clique num avatar pra alternar entre online e offline; ele migra de grupo com animação de layout."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <UserPresenceAvatar />
        </CardContent>
      </Card>
    </div>
  )
}
