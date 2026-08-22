import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Menu de Navegação Temporário */}
      <nav className="flex gap-4 border-b border-zinc-800 bg-zinc-900 p-4">
        <Link to="/" className="text-indigo-400 hover:underline font-medium">
          Dashboard
        </Link>
        <Link to="/clientes" className="text-indigo-400 hover:underline font-medium">
          Clientes
        </Link>
      </nav>

      {/* Gerenciador de Rotas */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Clients />} />
      </Routes>
    </div>
  )
}
