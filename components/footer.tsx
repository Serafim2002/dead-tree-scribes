export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/20 dark:border-amber-900/30 bg-background mt-auto">
      <div className="container mx-auto text-center px-4 py-6">
        <p className="font-grenze text-sm md:text-base text-primary-dark/70 dark:text-amber-600/80">
          © {new Date().getFullYear()} Dead Tree Scribes. Todos os direitos reservados.
        </p>
        <p className="font-grenze text-xs md:text-sm text-primary-dark/50 dark:text-amber-600/60 mt-2">
          Um grimório digital para aventureiros de D&D 5e
        </p>
      </div>
    </footer>
  )
}
