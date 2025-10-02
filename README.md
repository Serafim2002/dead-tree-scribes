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
├── app/                # Rotas e páginas (Next.js App Router)
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes reutilizáveis (Navbar, Footer, etc.)
├── lib/                # Conexão e funções auxiliares com Supabase
├── public/             # Arquivos estáticos (imagens, ícones, etc.)
├── styles/             # Estilos globais
├── .env.example        # Exemplo de variáveis de ambiente
├── package.json        # Scripts e dependências
└── README.md           # Documentação do projeto
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
