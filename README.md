# Dead Tree Scribes 🪶🌳

**Dead Tree Scribes** é um site feito para jogadores e mestres de **RPG de Mesa 5e (D&D)**.  
O objetivo é oferecer um espaço com recursos úteis para **criar, gerenciar e compartilhar fichas, aventuras e conteúdos de campanha**.

---

## 🚀 Tecnologias utilizadas

Este projeto foi desenvolvido com:

- **[Next.js](https://nextjs.org/)** — Framework React para aplicações web modernas
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização rápida e responsiva
- **[Supabase](https://supabase.com/)** — Banco de dados e autenticação

---

## 📁 Estrutura de pastas

```text
.
dead-tree-scribes/
├─ app/                          # Next.js app router
│  ├─ api/                       # Endpoints da API (ex: clientes)
│  │  └─ clientes/
│  │      ├─ route.ts            # CRUD via Supabase
│  ├─ clientes/                  # Página de listagem e cadastro de clientes
│  │  ├─ page.tsx                # Lista de clientes
│  │  └─ [id]/page.tsx           # Visualizar/editar cliente
│  ├─ dashboard/                 # Dashboard inicial
│  │  └─ page.tsx
│  └─ layout.tsx                 # Layout principal (navbar, sidebar)
├─ components/                   # Componentes reutilizáveis
│  ├─ Button.tsx
│  ├─ Form/                      # Forms com Hook Form
│  │  └─ ClienteForm.tsx
│  ├─ Table/                     # Tabelas (TanStack Table)
│  │  └─ ClienteTable.tsx
│  └─ UI/                        # Componentes Shadcn customizados
├─ lib/                          # Conexões externas e helpers
│  ├─ supabaseClient.ts          # Configuração Supabase
│  └─ apiHelpers.ts              # Funções genéricas para API
├─ hooks/                        # Hooks customizados
│  ├─ useClientes.ts             # TanStack Query + Supabase
│  └─ useAuth.ts                 # Auth Supabase
├─ context/                      # Contextos React
│  └─ AuthContext.tsx
├─ types/                        # Tipagens TypeScript
│  └─ cliente.ts
├─ styles/                       # Tailwind custom (se precisar)
│  └─ globals.css
├─ public/                        # Imagens, favicon, etc
├─ package.json
├─ tsconfig.json
└─ tailwind.config.js

```

---

## 🛠️ Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Serafim2002/dead-tree-scribes.git
   cd dead-tree-scribes
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` baseado no `.env.example`
   - Adicione as credenciais do Supabase (URL e chave anônima)

4. Rode o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse em:  
   👉 [http://localhost:3000](http://localhost:3000)

---

## 📦 Scripts úteis

- `dev` → roda a aplicação em modo de desenvolvimento  
- `build` → gera a build de produção  
- `start` → inicia a aplicação em modo de produção  
- `lint` → verifica problemas de lint no código  

---

## 🧪 Testes (opcional)

Se adicionar testes no futuro, basta rodar:

```bash
npm test
```

---

## 👥 Contribuição

Se quiser contribuir com o projeto:

1. Faça um fork  
2. Crie uma branch: `git checkout -b minha-feature`  
3. Commit suas alterações: `git commit -m "Minha feature"`  
4. Push para sua branch: `git push origin minha-feature`  
5. Abra um Pull Request 🚀  


---

## 🔗 Contato

👤 Tiago (Serafim2002)  
🔗 [GitHub](https://github.com/Serafim2002)  
