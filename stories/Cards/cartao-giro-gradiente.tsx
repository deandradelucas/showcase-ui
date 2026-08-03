import { ArrowRight } from "lucide-react"

function CartaoGiroGradiente() {
  return (
    <div className="relative h-[300px] w-[200px] overflow-hidden rounded-2xl border border-solid border-white/40">
      <div className="absolute h-full w-full bg-purple-400 p-1">
        <div className="h-full w-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]" />
      </div>

      <div className="relative flex h-full w-full items-center justify-center rounded-2xl backdrop-blur-lg">
        <div
          className="h-32 w-32 animate-spin rounded-full bg-gradient-to-tr from-purple-500 to-orange-300"
          style={{ animationDuration: "12s" }}
        />
      </div>

      <div className="absolute inset-0 flex h-full w-full justify-between p-2">
        <div className="flex w-3/5 flex-col rounded-xl bg-gray-50/10 p-2 pt-3 pb-1.5 font-mono font-medium text-gray-200 backdrop-blur-lg">
          <span className="text-xl font-medium">Card</span>
          <span className="text-xs text-gray-400">text</span>
          <div className="mt-auto flex w-full items-center justify-center">
            <span className="text-xs text-gray-400">2025</span>
          </div>
        </div>
        <div className="flex h-full flex-col items-end pt-2 text-white/50">
          <span className="text-[10px] leading-[12px]">UIverse</span>
          <span className="text-[10px] leading-[13px]">card</span>
          <div className="mt-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-50/20 backdrop-blur-lg transition-all duration-300 hover:bg-gray-50/30">
            <ArrowRight className="size-4 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { CartaoGiroGradiente }
