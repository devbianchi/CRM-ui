import { Bell } from 'lucide-react'

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-900/30 px-8">
      <div>
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Sistema Interno</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </button>
        <div className="h-px w-4 bg-zinc-800" />
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm text-white">
            GM
          </div>
          <span className="text-sm font-medium text-zinc-300">Gui Machado</span>
        </div>
      </div>
    </header>
  )
}
