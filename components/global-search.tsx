"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { CommandSearch, type CommandItem } from "@/components/ui/command-search-base"
import { rotas, navGroups } from "@/components/app-sidebar"

export function GlobalSearch() {
  const router = useRouter()

  const items = useMemo<CommandItem[]>(() => {
    const fromRotas: CommandItem[] = rotas.map((rota) => ({
      id: rota.href,
      title: rota.label,
      section: "Geral",
      icon: <rota.icon size={16} />,
      action: () => router.push(rota.href),
    }))

    const fromGroups: CommandItem[] = navGroups.flatMap((group) =>
      group.items.map((item) => ({
        id: item.href,
        title: item.label,
        section: group.label,
        icon: <ArrowRight size={16} />,
        action: () => router.push(item.href),
      }))
    )

    return [...fromRotas, ...fromGroups]
  }, [router])

  return <CommandSearch items={items} />
}
