import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'

export default function App() {
  return (
    <Routes>
      {/* Rota Pai que carrega a Sidebar e o Header */}
      <Route path="/" element={<DefaultLayout />}>
        {/* Rotas Filhas que serão injetadas dentro do <Outlet /> */}
        <Route index element={<Dashboard />} />
        <Route path="clientes" element={<Clients />} />
      </Route>
    </Routes>
  )
}
