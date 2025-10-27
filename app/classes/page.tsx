"use client"

export default function ClassesPage() {
  const classes = [
    { name: "⚔️ Guerreiro", desc: "Mestre do combate corpo a corpo e armas." },
    { name: "🪄 Mago", desc: "Guardião das artes arcanas e mistérios." },
    { name: "🗡️ Ladino", desc: "Astuto, sorrateiro e letal nas sombras." },
    { name: "🙏 Clérigo", desc: "Canaliza o poder divino para curar e proteger." },
    { name: "🏹 Patrulheiro", desc: "Especialista em sobrevivência e combate à distância." },
    { name: "🛡️ Paladino", desc: "Guerreiro sagrado, defensor do bem e da justiça." },
    { name: "🧙 Bruxo", desc: "Feiticeiro que faz pactos com entidades poderosas." },
    { name: "🪓 Bárbaro", desc: "Feroz guerreiro que canaliza a fúria primal." },
    { name: "🎭 Bardo", desc: "Artista e encantador, mestre das magias inspiradoras." },
    { name: "🦴 Druida", desc: "Guardião da natureza, capaz de se transformar em animais." },
    { name: "🕵️ Feiticeiro", desc: "Usuário de magia inata, com poderes únicos." },
    { name: "🧝 Monge", desc: "Mestre das artes marciais e do equilíbrio espiritual." },
    { name: "🧙‍♂️ Artífice", desc: "Inventor e mestre das engenhocas mágicas." },
  ]

  return (
    <div className="min-h-[calc(100vh-8rem)] px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
        {/* Page title */}
        <div className="text-center">
          <h1 
            className="font-grenze text-4xl sm:text-5xl md:text-6xl font-bold text-primary dark:text-accent animate-fade-in"
            style={{ textShadow: 'var(--title-glow)' }}
          >
            Classes de D&D 5e
          </h1>
          <p className="mt-4 font-grenze text-lg md:text-xl text-primary-dark dark:text-amber-600">
            Escolha seu caminho e desbrave as terras místicas
          </p>
        </div>

        {/* Classes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up animation-delay-200">
          {classes.map((classItem, index) => (
            <div
              key={classItem.name}
              className="group relative rounded-lg border-2 border-primary/20 dark:border-amber-900/30 bg-card-light dark:bg-card-dark p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/40 dark:hover:border-amber-700/50 cursor-pointer animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 50}ms`,
                boxShadow: 'var(--card-shadow)'
              }}
            >
              <h2 className="font-grenze text-xl md:text-2xl font-semibold mb-3 text-primary dark:text-accent group-hover:text-primary-dark dark:group-hover:text-amber-400 transition-colors">
                {classItem.name}
              </h2>
              <p className="font-grenze text-base md:text-lg text-primary-dark/80 dark:text-amber-600/90 leading-relaxed">
                {classItem.desc}
              </p>
              
              {/* Decorative corner accent */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/30 dark:border-amber-700/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary/30 dark:border-amber-700/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Footer message */}
        <div className="text-center pt-8">
          <p className="font-grenze text-lg md:text-xl text-primary-dark dark:text-amber-600/80 italic">
            Cada classe oferece habilidades únicas e estilos de jogo distintos.
            <br className="hidden sm:block" />
            Explore e encontre aquela que ressoa com sua alma aventureira!
          </p>
        </div>
      </div>
    </div>
  )
}
