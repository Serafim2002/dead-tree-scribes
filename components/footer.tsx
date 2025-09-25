export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto text-center text-xs py-2 text-muted-foreground">
        © {new Date().getFullYear()} Dead Tree Scribes. Todos os direitos reservados.
      </div>
    </footer>
  )
}
