import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react'

export function Sidebar() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/clientes', label: 'Clientes', icon: Users },
  ]

  return (
    <aside className="flex h-full w-64 flex-col border-r border-zinc-800 bg-zinc-900/50 p-4">
      <div className="mb-8 px-2 py-3">
        <h2 className="text-xl font-bold tracking-wider uppercase text-indigo-400">dashboard - crm</h2>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-indigo-600 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100'
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-zinc-800 pt-4 space-y-1">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100">
          <Settings className="h-4 w-4" />
          Configurações
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-rose-400 hover:bg-rose-950/30 hover:text-rose-300">
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  )
}
