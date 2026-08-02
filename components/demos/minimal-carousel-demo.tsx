"use client"

import { CreditCard, PiggyBank, TrendingUp, Wallet } from "lucide-react"
import { MinimalCarousel, type CarouselCard } from "@/components/ui/minimal-carousel"

const CARDS: CarouselCard[] = [
  { id: "1", title: "Carteira", value: "R$ 4.230,00", color: "bg-blue-500", icon: Wallet },
  { id: "2", title: "Investimentos", value: "R$ 12.850,00", color: "bg-emerald-500", icon: TrendingUp },
  { id: "3", title: "Poupança", value: "R$ 2.100,00", color: "bg-purple-500", icon: PiggyBank },
  { id: "4", title: "Cartão", value: "R$ 890,00", color: "bg-orange-500", icon: CreditCard },
]

export function MinimalCarouselDemo() {
  return <MinimalCarousel cards={CARDS} />
}
