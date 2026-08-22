import { Outlet } from 'react-router-dom'
import { Sidebar, Header } from '../components/layout'

export default function DefaultLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto bg-zinc-950">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
