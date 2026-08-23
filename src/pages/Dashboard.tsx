import { Button } from "../components/ui/button";

export default function Dashboard() {
     return(
        <>
            <div className="p-8">
                <h1 className="text-2xl font-bold text-white">Painel do CRM (Dashboard)</h1>
            </div>
            <Button variant="default" onClick={() => alert('Botão clicado!')}>
                Clique aqui
            </Button>
        </>
     )
}
