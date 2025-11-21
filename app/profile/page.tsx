"use client"

import { useUser } from "@/lib/useUser"
import Image from "next/image"
import { ProtectedRoute } from "@/components/protected-route"

function ProfilePageContent() {
  const { user } = useUser()

  return (
    <section className="relative min-h-screen py-8 md:py-12 bg-background" suppressHydrationWarning>
      {/* Background parchment image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1024px] h-[980px] rotate-90">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/ac9efc554c551602587ec39c6fdb3246d7f7ed27?width=2048"
            alt=""
            fill
            className="object-cover blur-[3.5px] opacity-100"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 
            className="font-grenze text-5xl sm:text-6xl md:text-7xl font-normal tracking-wide text-accent"
            style={{ 
              textShadow: 'var(--title-glow)'
            }}
          >
            Minha Conta
          </h1>
        </div>

        {/* Profile Card */}
        <div 
          className="max-w-2xl mx-auto p-8 rounded-3xl bg-card dark:bg-card-dark"
          style={{
            boxShadow: 'var(--card-shadow)'
          }}
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-cta dark:bg-cta-dark flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-cta-foreground dark:text-cta-foreground-dark">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="font-grenze text-3xl mb-2 text-accent">
                {(user as any)?.user_metadata?.username || "Aventureiro"}
              </h2>
              <p className="font-grenze text-lg text-foreground">
                {user?.email}
              </p>
            </div>

            <div className="border-t-2 border-accent pt-6">
              <div className="space-y-4">
                <div>
                  <label className="block font-grenze text-lg mb-1 text-accent">
                    Nome de Usuário
                  </label>
                  <div className="px-4 py-3 rounded-lg border-2 border-accent bg-primary/50 dark:bg-primary-dark/50 text-accent">
                    {(user as any)?.user_metadata?.username || "N/A"}
                  </div>
                </div>

                <div>
                  <label className="block font-grenze text-lg mb-1 text-accent">
                    Email
                  </label>
                  <div className="px-4 py-3 rounded-lg border-2 border-accent bg-primary/50 dark:bg-primary-dark/50 text-accent">
                    {user?.email}
                  </div>
                </div>

                <div>
                  <label className="block font-grenze text-lg mb-1 text-accent">
                    Membro desde
                  </label>
                  <div className="px-4 py-3 rounded-lg border-2 border-accent bg-primary/50 dark:bg-primary-dark/50 text-accent">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString('pt-BR') : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfilePageContent />
    </ProtectedRoute>
  )
}
