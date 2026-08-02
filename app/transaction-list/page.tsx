import { ShoppingBag, Utensils, Fuel } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TransactionList, type Transaction } from "@/components/ui/transaction-list-base"
import { ViewCode } from "@/components/view-code"
import { readComponentSource } from "@/lib/read-source"
import { buildCodeFiles } from "@/lib/view-code-files"

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    icon: <ShoppingBag className="size-5 text-background" />,
    name: "Amazon",
    category: "Compras",
    amount: "R$ 189,90",
    date: "12 de julho",
    time: "14:32",
    transactionId: "TX-88213",
    paymentMethod: "cartão",
    cardNumber: "4242",
    cardType: "visa",
  },
  {
    id: "2",
    icon: <Utensils className="size-5 text-background" />,
    name: "iFood",
    category: "Alimentação",
    amount: "R$ 54,00",
    date: "11 de julho",
    time: "20:05",
    transactionId: "TX-88190",
    paymentMethod: "pix",
    cardNumber: "9981",
    cardType: "mastercard",
  },
  {
    id: "3",
    icon: <Fuel className="size-5 text-background" />,
    name: "Posto Shell",
    category: "Transporte",
    amount: "R$ 120,00",
    date: "9 de julho",
    time: "08:47",
    transactionId: "TX-88104",
    paymentMethod: "cartão",
    cardNumber: "4242",
    cardType: "visa",
  },
]

const USAGE_CODE = `import { TransactionList } from "@/components/ui/transaction-list-base"

<TransactionList transactions={transactions} />`

export default async function TransactionListPage() {
  const source = readComponentSource("components/ui/transaction-list-base.tsx")
  const files = await buildCodeFiles([
    { path: "components/ui/transaction-list-base.tsx", code: source },
    { path: "uso", code: USAGE_CODE },
  ])

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-1.5">
            Transaction List
            <span className="text-sm font-normal text-muted-foreground">
              — Watermelon UI
            </span>
          </CardTitle>
          <CardAction>
            <ViewCode
              install="https://registry.watermelon.sh/r/transaction-list-base.json"
              description="Clique numa transação pra ver os detalhes (data, método de pagamento, cartão) com layout animado."
              files={files}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <TransactionList transactions={TRANSACTIONS} />
        </CardContent>
      </Card>
    </div>
  )
}
