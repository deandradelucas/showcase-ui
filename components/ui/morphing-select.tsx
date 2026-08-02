"use client"

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

type Option = {
  value: string
  label: string
  description: string
  accent: string
}

const OPTIONS: Option[] = [
  {
    value: "design",
    label: "Design",
    description: "Interface elegante para apresentações e produtos visuais.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    value: "growth",
    label: "Growth",
    description: "Uma opção mais energética, com foco em conversão.",
    accent: "from-cyan-400 to-sky-600",
  },
  {
    value: "ops",
    label: "Ops",
    description: "Fluxo estável e confiável para rotinas operacionais.",
    accent: "from-emerald-400 to-teal-600",
  },
]

export function MorphingSelect() {
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const listId = useId()

  const selected = OPTIONS[selectedIndex]

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("touchstart", onPointerDown, { passive: true })
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("touchstart", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  useGSAP(
    () => {
      const panel = panelRef.current
      const buttons = optionRefs.current.filter(Boolean) as HTMLButtonElement[]

      if (!panel) {
        return
      }

      gsap.killTweensOf(panel)
      gsap.killTweensOf(buttons)

      if (open) {
        gsap.set(panel, { display: "block" })
        gsap.fromTo(
          panel,
          { height: 0, opacity: 0, y: -10, scale: 0.98 },
          {
            height: "auto",
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.42,
            ease: "power3.out",
            clearProps: "height",
          }
        )

        gsap.fromTo(
          buttons,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.06,
          }
        )
      } else {
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          y: -8,
          scale: 0.985,
          duration: 0.28,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(panel, { display: "none" })
          },
        })
      }

      gsap.to(triggerRef.current, {
        scale: open ? 1.01 : 1,
        duration: 0.25,
        ease: "power2.out",
      })
    },
    { dependencies: [open], scope: rootRef }
  )

  const chooseOption = (index: number) => {
    setSelectedIndex(index)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setOpen(true)
      window.requestAnimationFrame(() => optionRefs.current[0]?.focus())
    }
  }

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = optionRefs.current.findIndex((el) => el === document.activeElement)

    if (event.key === "ArrowDown") {
      event.preventDefault()
      const nextIndex = Math.min(currentIndex + 1, OPTIONS.length - 1)
      optionRefs.current[nextIndex]?.focus()
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      const prevIndex = Math.max(currentIndex - 1, 0)
      optionRefs.current[prevIndex]?.focus()
    }

    if (event.key === "Home") {
      event.preventDefault()
      optionRefs.current[0]?.focus()
    }

    if (event.key === "End") {
      event.preventDefault()
      optionRefs.current[OPTIONS.length - 1]?.focus()
    }
  }

  return (
    <div
      ref={rootRef}
      className="mx-auto w-full max-w-xl rounded-[2rem] border border-white/[0.12] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/40"
    >
      <div className="mb-4 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.45]">
          Morphing Select
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Seleção com transição suave</h2>
        <p className="text-sm leading-6 text-white/60">
          Inspirado no efeito de morphing: o bloco principal abre, expande e revela as opções com movimento
          suave.
        </p>
      </div>

      <div className="relative">
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
          onKeyDown={onTriggerKeyDown}
          className="flex w-full cursor-pointer items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-left transition-colors hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
        >
          <span className="flex items-center gap-3">
            <span
              className={`h-3 w-3 rounded-full bg-gradient-to-br ${selected.accent} shadow-lg shadow-black/30`}
              aria-hidden="true"
            />
            <span>
              <span className="block text-sm font-medium text-white/70">Categoria ativa</span>
              <span className="block text-lg font-semibold text-white">{selected.label}</span>
            </span>
          </span>

          <span className="text-sm text-white/50">{open ? "Fechar" : "Abrir"}</span>
        </button>

        <div
          ref={panelRef}
          className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-20 hidden overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/95 p-2 shadow-2xl shadow-black/40 backdrop-blur"
        >
          <div
            id={listId}
            role="listbox"
            aria-label="Opções do seletor"
            tabIndex={-1}
            onKeyDown={onListKeyDown}
            className="grid gap-2"
          >
            {OPTIONS.map((option, index) => {
              const active = index === selectedIndex

              return (
                <button
                  key={option.value}
                  ref={(node) => {
                    optionRefs.current[index] = node
                  }}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => chooseOption(index)}
                  className={`group flex w-full cursor-pointer items-start gap-3 rounded-[1.25rem] border px-4 py-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/70 ${
                    active
                      ? "border-cyan-400/40 bg-cyan-400/10"
                      : "border-white/[0.08] bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]"
                  }`}
                >
                  <span
                    className={`mt-0.5 h-10 w-10 rounded-2xl bg-gradient-to-br ${option.accent} shadow-lg shadow-black/20`}
                    aria-hidden="true"
                  />

                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold text-white">{option.label}</span>
                    <span className="mt-0.5 block text-sm leading-6 text-white/60">{option.description}</span>
                  </span>

                  <span className="pt-1 text-xs uppercase tracking-[0.18em] text-white/[0.35]">
                    {active ? "Ativo" : "Escolher"}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
