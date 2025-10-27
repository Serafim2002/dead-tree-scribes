# Configuração de Autenticação - Dead Tree Scribes

Este guia mostra como configurar o sistema de autenticação do projeto.

## 📋 Pré-requisitos

- Conta no Supabase (gratuita)
- Node.js instalado
- Python 3.8+ instalado

## 🔧 Configuração do Supabase

1. **Criar projeto no Supabase**
   - Acesse [supabase.com](https://supabase.com)
   - Crie uma nova organização e projeto
   - Aguarde a inicialização do projeto

2. **Obter as credenciais**
   - No dashboard do Supabase, vá em **Settings** > **API**
   - Copie a `URL` do projeto
   - Copie a chave `anon/public` (anon key)

3. **Configurar autenticação**
   - Vá em **Authentication** > **Providers**
   - Habilite **Email** (já vem habilitado por padrão)
   - (Opcional) Habilite **Google**, **Facebook**, **Twitter** para login social:
     - Para cada provider, você precisará criar um app OAuth no respectivo serviço
     - Adicione as credenciais (Client ID e Client Secret) no Supabase

## 🌐 Configuração do Frontend (Next.js)

1. **Criar arquivo .env.local**
   ```bash
   cp .env.example .env.local
   ```

2. **Adicionar as variáveis de ambiente**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_aqui
   ```

3. **Instalar dependências**
   ```bash
   npm install
   ```

4. **Executar o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

## 🐍 Configuração do Backend (Python/FastAPI)

1. **Navegar para a pasta da API**
   ```bash
   cd api/app
   ```

2. **Criar arquivo .env**
   ```bash
   touch .env
   ```

3. **Adicionar as variáveis de ambiente**
   ```env
   SUPABASE_URL=https://seu-projeto.supabase.co
   SUPABASE_KEY=sua_chave_anon_aqui
   ```

4. **Instalar dependências**
   ```bash
   cd ..
   pip install -r requirements.txt
   ```

5. **Executar o servidor da API**
   ```bash
   uvicorn app.main:app --reload
   ```

## 🔑 Funcionalidades Implementadas

### Frontend (Next.js + React)

- **Login** (`/login`): Autenticação com email/senha e OAuth
- **Registro** (`/register`): Criação de nova conta
- **Esqueci a senha** (`/forgot-password`): Recuperação de senha
- Design pixel-perfect baseado no Figma
- Responsivo para mobile, tablet e desktop
- Validação com React Hook Form + Zod
- Integração com Supabase Auth

### Backend (FastAPI + Python)

- **POST /auth/login**: Autenticação de usuário
- **POST /auth/register**: Registro de novo usuário
- **POST /auth/forgot-password**: Envio de email de recuperação
- **POST /auth/logout**: Logout do usuário
- **GET /auth/me**: Obter dados do usuário autenticado
- CORS configurado para desenvolvimento local

## 🎨 Design

O design segue o tema medieval/fantasia "Dead Tree Scribes":
- Fonte customizada: Grenze (Google Fonts)
- Cores temáticas: tons dourados, marrons e pergaminho
- Ícones pixelados para redes sociais
- Background com imagem de castelo fantasia

## 📱 Rotas Disponíveis

- `/` - Página inicial
- `/login` - Tela de login
- `/register` - Tela de cadastro
- `/forgot-password` - Recuperação de senha
- `/classes` - Classes de D&D
- `/about` - Sobre o projeto

## 🔒 Segurança

- Senhas são criptografadas pelo Supabase
- Tokens JWT para sessões
- Validação de formulários no frontend e backend
- HTTPS obrigatório em produção (Supabase)

## 🚀 Próximos Passos

1. Configurar email templates no Supabase para recuperação de senha
2. Adicionar proteção de rotas privadas
3. Implementar perfil de usuário
4. Adicionar verificação de email

## 📚 Documentação

- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Next.js](https://nextjs.org/docs)
- [FastAPI](https://fastapi.tiangolo.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## ❓ Problemas Comuns

### "Invalid API key"
- Verifique se copiou a chave correta (anon/public key)
- Verifique se o arquivo .env.local está na raiz do projeto

### Erro de CORS
- Verifique se a API está rodando na porta correta
- Verifique se o CORS está configurado no FastAPI

### Email não chega na recuperação de senha
- Verifique a caixa de spam
- Configure um provedor de email no Supabase (Settings > Auth > Email)
