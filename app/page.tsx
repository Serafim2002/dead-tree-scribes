"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <section className="relative space-y-8">
      {/* Título com fonte temática */}
      <div className="text-center">
        <h1 className="font-cinzel text-5xl font-bold tracking-wide drop-shadow-md">
          Project RPG
        </h1>
        <h2 className="font-cinzel text-2xl text-muted-foreground italic">
          Dead Tree Scribes
        </h2>
      </div>

      {/* Texto de introdução */}
      <div className="max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-4 text-left">
        <p>
          Este projeto é um grimório digital pensado para jogadores e mestres de D&D 5e
          que querem ter todas as informações essenciais à mão, de forma prática, bonita
          e organizada.
        </p>

        <p>
          A ideia é criar uma ferramenta completa, onde é possível consultar classes,
          magias, itens, regras e materiais de campanha sem precisar folhear livros
          físicos ou perder tempo procurando informações em várias fontes.
        </p>

        <p>
          O objetivo principal é apoiar tanto os jogadores quanto os mestres, jogadores
          podem explorar e compreender suas classes, habilidades e equipamentos de forma
          rápida, enquanto mestres têm acesso fácil às regras e conteúdos necessários
          para conduzir aventuras mais fluidas e envolventes.
        </p>

        <p>
          Além disso, o grimório digital busca tornar a experiência mais interativa,
          permitindo que os usuários salvem anotações, acompanhem evolução de personagens
          e encontrem referências de forma organizada.
        </p>

        <p>
          Com design moderno e interface intuitiva, a ferramenta pretende transformar a
          maneira como se joga D&D, tornando cada sessão mais ágil, divertida e imersiva,
          sem complicações e sempre com as informações corretas à disposição.
        </p>
      </div>

      {/* Botões de ação */}
      <div className="flex justify-center gap-6 mt-8">
        <Button asChild size="lg" className="rounded-2xl shadow-md">
          <Link href="/classes">📜 Ver Classes</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="rounded-2xl shadow-md"
        >
          <Link href="/about">🕯️ Sobre o Projeto</Link>
        </Button>
      </div>
    </section>
  )
}
