# L9s docs

# Getting Started

---

Documentação técnica e não-técnica do sistema L9s (LeadCompass).

<aside>

Parte do projeto é open-source, tais como UI e esta documentação. Sinta-se à vontade para contribuir <3.

</aside>

## Planejamento e Viabilidade (Concepção)

---

### Escopo:

O objetivo do sistema é automatizar o processo de monitoramento de clientes. Era feito somente por Excel e manualmente iam colocando os valores nas tabelas. O ranqueamento de clientes era feito separadamente.

O sistema visa resolver a retardação que o processo manual gera.

A parte principal gira entorno do ranqueamento dos 20 clientes com mais potenciais (POTENTIAL).

### Análise de Viabilidade:

Técnica: O sistema visa treinar a forma como codifico e apresento um negócio, ao mesmo tempo que, tenha aplicação real no dia a dia do usuário. A análise técnica entra em conjunto com a análise temporal - isso significa que o sistema ajuda ambos usuário e desenvolvedor, mas com um custo de tempo elevado (4-5 meses para mvp, ou menos se utilizada IA como auxiliar).

### Cronograma e Recursos:

Projeto com um único desenvolvedor Fullstack (estudante) - essa será a equipe por trás do projeto.

| Fase | Duração Estimada | Início Previsto | Término Previsto | Marcos Importantes |
| --- | --- | --- | --- | --- |
| 1. Iniciação e Planejamento | 1 semana | Sem 1 | Sem 1 | Base aprovada para desenvolvimento |
| 2. Desenvolvimento Infra | 7 semanas | Sem 2 | Sem 10 | Backend pronto e servidores ou tecnologias preparadas |
| 3. Desenvolvimento UI | 4 semanas | Sem 11 | Sem 16 | Visual pronto com dashboards funcionais |
| 4. Testes e Execução | 2 semanas | Sem 17 | Sem 20 | Sistema completo e funcional com regras de negócio validadas |
| 5. Encerramento | Indefinido (projetar modelo de negócio) | ''" | "" | Sistema entregue e feedbacks contínuos |

## Requisitos

---

### RF

- O sistema deve receber uma tabela do Excel
- O sistema deve mostrar que a tabela foi importada
- O sistema deve ranquear os 20 melhores clientes baseada no POTENTIAL

### RNF

- O sistema deve rodar na plataforma Vercel (UI)
- O sistema deve compartilhar banco de dados (definir infra)
- O sistema deve ser acessível a todos os vendedores
- O sistema deve manter um histórico de planilhas (a fim de dashboards e relatórios)

## Design de Arquitetura e Esquemas (Modelagem)

---

### Esquema de Banco de Dados:

em desenvolvimento...

### Arquitetura do Sistema

O padrão arquitetural será de Monólito Modular (simples para iniciar, preparado para escalar).

APIs externas: API do Maps (para execução futura de Otimização de Rotas).

### Diagramas UML

### UI/UX (Prototipação)

## Desenvolvimento

---

### Backend

### Frontend

### Controle de Versão

## Testes e Garantia de Qualidade

---

### Testes Unitários

### Testes de Integração

### Testes de Homologação (Usuário)

## Deploy

---

### Infraestrutura e DevOps

### Manutenção

## Hierarquia

---

O esquema é:

- Nível 1:
    - Gestor dos vendedores
- Nível 2:
    - Demais vendedores (Usuário comum)

O que cada um pode fazer:

- Nível 1:
    1. Gerenciar vendedores
    2. Ver dashboard principal
    3. Visualizar ranking de clientes
    4. Visualizar relatório de vendedores
    5. Editar perfíl
- Nível 2:
    1. Visualizar ranking de clientes
    2. Editar perfíl
