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
    <div className="space-y-8">
      <h1 className="font-cinzel text-4xl font-bold text-center">Classes</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((c) => (
          <div
            key={c.name}
            className="rounded-2xl border bg-card shadow-lg p-6 hover:scale-[1.02] transition-transform"
          >
            <h2 className="font-cinzel text-2xl mb-2">{c.name}</h2>
            <p className="text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
