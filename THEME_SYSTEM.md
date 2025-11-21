# Sistema de Tema Claro/Escuro

## Visão Geral

O sistema de tema foi implementado usando `next-themes` com suporte completo para tema claro, escuro e automático (baseado na preferência do sistema).

## Características Implementadas

### 1. **Persistência de Preferência**
- A preferência do usuário é salva automaticamente no `localStorage`
- Chave de armazenamento: `dead-tree-scribes-theme`
- O tema é aplicado automaticamente ao carregar o site

### 2. **Cores do Tema**

#### Tema Claro (Light Mode)
- **Background**: `#EBF2BD` (pergaminho claro)
- **Foreground**: `#340A58` (roxo escuro)
- **Primary**: `#7925C3` (roxo)
- **Accent**: `#EBF2BD` (dourado claro)
- **CTA**: `#340A58` / `#EBF2BD` (roxo/creme)

#### Tema Escuro (Dark Mode)
- **Background**: `#2D1705` (marrom escuro)
- **Foreground**: `#FFC592` (laranja claro)
- **Primary**: `#CF7F2F` (laranja)
- **Accent**: `#EBF2BD` (creme)
- **CTA**: `#D5A82D` / `#5B300B` (dourado/marrom)

### 3. **Componentes Atualizados**

#### Core Components
- ✅ `ThemeToggle` - Botão de alternância com ícones sol/lua
- ✅ `ThemeProvider` - Provider global com configurações
- ✅ `NavigationButton` - Menu de navegação com cores do tema
- ✅ `NavigationMenu` - Dropdown menu responsivo ao tema

#### Pages
- ✅ `HomePage (/)` - Página inicial com tema adaptativo
- ✅ `ProfilePage (/profile)` - Perfil do usuário
- ⚠️ `EscudoDoMestrePage (/escudo-do-mestre)` - Mantém design único (wood background)
- ⚠️ `LoginPage (/login)` - Formulário de login (design específico)
- ⚠️ `RegisterPage (/register)` - Formulário de registro (design específico)

### 4. **Variáveis CSS Globais**

Todas as variáveis CSS estão definidas em `app/globals.css`:

```css
:root {
  /* Light mode variables */
  --background: #EBF2BD;
  --foreground: #340A58;
  --primary: #7925C3;
  /* ... */
}

.dark {
  /* Dark mode variables */
  --background: #2D1705;
  --foreground: #FFC592;
  --primary: #FFC592;
  /* ... */
}
```

### 5. **Como Usar**

#### No Tailwind CSS
```tsx
<div className="bg-background text-foreground">
  <h1 className="text-accent">Título</h1>
  <button className="bg-cta dark:bg-cta-dark text-cta-foreground dark:text-cta-foreground-dark">
    Botão
  </button>
</div>
```

#### Com Style Props
```tsx
<div style={{ textShadow: 'var(--title-glow)' }}>
  Texto com brilho
</div>
```

### 6. **Botão de Alternância**

O botão de tema está localizado no canto superior direito de todas as páginas:
- **Light Mode**: Mostra ícone de sol
- **Dark Mode**: Mostra ícone de lua
- Transições suaves entre estados
- Tooltip informativo

### 7. **Transições**

- Transições desabilitadas durante mudança de tema (`disableTransitionOnChange`)
- Animações suaves para ícones do toggle
- Efeitos hover/active em botões

## Configuração Técnica

### Layout Root
```tsx
// app/layout.tsx
<ThemeProvider 
  attribute="class" 
  defaultTheme="system" 
  enableSystem 
  disableTransitionOnChange
  storageKey="dead-tree-scribes-theme"
>
  {children}
</ThemeProvider>
```

### Theme Toggle Component
```tsx
// components/theme-toggle.tsx
const { theme, setTheme } = useTheme()

<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  <Sun className="dark:scale-0" />
  <Moon className="dark:scale-100" />
</button>
```

## Melhorias Futuras

### Páginas Pendentes
- [ ] LoginPage - Adaptar cores para tema
- [ ] RegisterPage - Adaptar cores para tema  
- [ ] ForgotPasswordPage - Adaptar cores para tema
- [ ] ClassesPage - Implementar suporte a tema

### Componentes
- [ ] PopUps/Modais - Garantir que todos usem cores do tema
- [ ] Cards personalizados - Adicionar variantes de tema
- [ ] Formulários - Estilos consistentes em ambos temas

### UX
- [ ] Adicionar transição de fade ao alternar tema
- [ ] Preload do tema antes da renderização (evitar flash)
- [ ] Opção de tema "automático" visível no menu

## Testando

1. **Alternar Tema**: Clique no botão sol/lua no canto superior direito
2. **Persistência**: Recarregue a página - o tema deve ser mantido
3. **Sistema**: Mude a preferência do SO - o tema deve seguir (se em modo "system")
4. **Componentes**: Navegue pelas páginas - todas devem respeitar o tema

## Troubleshooting

### Tema não persiste
- Verifique se `localStorage` está habilitado
- Confirme que a chave `dead-tree-scribes-theme` existe

### Flash de tema errado
- O `suppressHydrationWarning` está no `<html>` tag
- O ThemeProvider está envolvendo todo o conteúdo

### Cores não mudam
- Confirme que está usando as classes CSS corretas
- Verifique se as variáveis CSS estão definidas
- Use `dark:` prefix para estilos específicos do tema escuro

## Suporte

Para dúvidas ou problemas:
- Verifique a documentação do `next-themes`
- Consulte `app/globals.css` para variáveis disponíveis
- Revise este documento para exemplos de implementação
