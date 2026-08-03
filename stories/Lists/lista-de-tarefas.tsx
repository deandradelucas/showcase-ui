import { useState } from "react"
import { AnimatePresence, Reorder, motion, useMotionValue } from "motion/react"
import { Check } from "lucide-react"

interface TodoItem {
  id: string
  text: string
  done: boolean
}

const ACCENT_COLORS = [
  "#ec4899", // pink
  "#a855f7", // purple
  "#8b5cf6", // violet
  "#3b82f6", // blue
  "#06b6d4", // cyan
]

const INITIAL_ITEMS: TodoItem[] = [
  { id: "1", text: "Revisar proposta do projeto", done: false },
  { id: "2", text: "Atualizar documentação", done: false },
  { id: "3", text: "Agendar reunião de equipe", done: false },
  { id: "4", text: "Testar funcionalidades novas", done: false },
  { id: "5", text: "Enviar relatório semanal", done: false },
]

function TodoRow({ item, index, onToggle }: { item: TodoItem; index: number; onToggle: (id: string) => void }) {
  const y = useMotionValue(0)
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length]

  return (
    <Reorder.Item
      value={item}
      id={item.id}
      style={{ y }}
      className="list-none"
      whileDrag={{ scale: 1.02, boxShadow: "0 8px 24px -8px rgb(0 0 0 / 0.25)" }}
    >
      <div className="mb-2 flex cursor-grab items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 active:cursor-grabbing">
        <motion.button
          type="button"
          onClick={() => onToggle(item.id)}
          whileTap={{ scale: 0.9 }}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors"
          style={{ borderColor: accent, backgroundColor: item.done ? accent : "transparent" }}
          aria-pressed={item.done}
          aria-label={item.done ? `Marcar "${item.text}" como pendente` : `Marcar "${item.text}" como concluída`}
        >
          <AnimatePresence>
            {item.done && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <motion.span
          initial={false}
          animate={{ opacity: item.done ? 0.5 : 1 }}
          className="relative text-sm text-foreground"
        >
          {item.text}
          <motion.span
            initial={false}
            animate={{ scaleX: item.done ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ originX: 0, backgroundColor: accent }}
            className="absolute left-0 top-1/2 h-px w-full"
          />
        </motion.span>
      </div>
    </Reorder.Item>
  )
}

function ListaDeTarefas() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="w-full max-w-sm"
    >
      {items.map((item, index) => (
        <TodoRow key={item.id} item={item} index={index} onToggle={toggle} />
      ))}
    </Reorder.Group>
  )
}

export { ListaDeTarefas }
