"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginInput } from "@/lib/auth-schemas"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data: user, error: queryError } = await supabase
        .from("Users")
        .select("*")
        .eq("email", data.email)
        .eq("password", data.password)
        .single()

      if (queryError || !user) {
        throw new Error("Usuário ou senha incorretos 🧙‍♂️")
      }

      // Remove senha antes de salvar localmente
      const { password, ...userWithoutPassword } = user
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      router.push("/")
    } catch (err: any) {
      setError(err.message || "Erro ao entrar no reino ⚔️")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/56c8f99fb4659d53148b4acbafcf1f14fe924462?width=2944)',
          filter: 'blur(5px)',
        }}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-6xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Panel - Form */}
        <div
          className="flex-1 p-6 sm:p-8 lg:p-12 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 17.71%, rgba(255, 237, 37, 0.11) 83.65%), rgba(115, 53, 8, 0.85)',
            boxShadow:
              '0 752px 210px 0 rgba(0, 0, 0, 0.01), 0 481px 192px 0 rgba(0, 0, 0, 0.04), 0 271px 162px 0 rgba(0, 0, 0, 0.15), 0 120px 120px 0 rgba(0, 0, 0, 0.26), 0 30px 66px 0 rgba(0, 0, 0, 0.29)',
          }}
        >
          <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
            {/* Title */}
            <h1
              className="text-center font-grenze text-3xl sm:text-4xl lg:text-5xl font-normal"
              style={{
                color: '#EBF2BD',
                textShadow:
                  '0 19px 5px rgba(210, 201, 142, 0.02), 0 12px 5px rgba(210, 201, 142, 0.15), 0 7px 4px rgba(210, 201, 142, 0.50), 0 3px 3px rgba(210, 201, 142, 0.85), 0 1px 2px rgba(210, 201, 142, 0.98)',
              }}
            >
              DEAD TREE SCRIBES
            </h1>

            {/* Subtitle */}
            <p
              className="text-center font-grenze text-xl sm:text-2xl lg:text-3xl font-normal"
              style={{
                color: '#FFC592',
                textShadow:
                  '0 0 10px rgba(255, 231, 71, 0.01), 0 0 9px rgba(255, 231, 71, 0.07), 0 0 8px rgba(255, 231, 71, 0.25), 0 0 6px rgba(255, 231, 71, 0.43), 0 0 3px rgba(255, 231, 71, 0.49)',
              }}
            >
              Mistérios e lendas aguardam o herói que ousar buscá-los.
            </p>

            {/* Description */}
            <p
              className="text-center font-grenze text-lg sm:text-xl lg:text-2xl font-normal"
              style={{
                color: '#FFC592',
                textShadow:
                  '2px 0 10px rgba(230, 218, 92, 0.01), 1px 0 9px rgba(230, 218, 92, 0.10), 1px 0 8px rgba(230, 218, 92, 0.35), 0 0 6px rgba(230, 218, 92, 0.60), 0 0 3px rgba(230, 218, 92, 0.69)',
              }}
            >
              Entre no reino e continue sua aventura.
            </p>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm text-center font-grenze">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              {/* Email Input */}
              <div className="relative">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border-2"
                  style={{
                    borderColor: '#EBF2BD',
                    background: 'rgba(207, 127, 47, 0.50)',
                  }}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="flex-shrink-0 w-5 h-5 sm:w-7 sm:h-7"
                  >
                    <path
                      d="M27.625 2.125H11.6875C10.2791 2.12669 8.92878 2.68694 7.93286 3.68286C6.93694 4.67878 6.37669 6.02906 6.375 7.4375V23.375H4.25C3.077 23.375 2.125 24.3291 2.125 25.5V27.625C2.125 29.9689 4.03112 31.875 6.375 31.875H21.25C23.5939 31.875 25.5 29.9689 25.5 27.625V10.625H29.75C30.923 10.625 31.875 9.67088 31.875 8.5V6.375C31.875 4.03112 29.9689 2.125 27.625 2.125ZM6.375 29.75C5.202 29.75 4.25 28.7959 4.25 27.625V25.5H17V27.625C17 28.3985 17.2083 29.1252 17.5716 29.75H6.375ZM23.375 27.625C23.3505 28.1721 23.1159 28.6888 22.7201 29.0673C22.3243 29.4458 21.7977 29.6571 21.25 29.6571C20.7023 29.6571 20.1757 29.4458 19.7799 29.0673C19.3841 28.6888 19.1495 28.1721 19.125 27.625V25.5C19.125 24.3291 18.173 23.375 17 23.375H8.5V7.4375C8.5 5.68012 9.93012 4.25 11.6875 4.25H23.9466C23.5728 4.89587 23.3757 5.62877 23.375 6.375V27.625ZM29.75 8.5H25.5V6.375C25.5245 5.82786 25.7591 5.31124 26.1549 4.93271C26.5507 4.55419 27.0773 4.34293 27.625 4.34293C28.1727 4.34293 28.6993 4.55419 29.0951 4.93271C29.4909 5.31124 29.7255 5.82786 29.75 6.375V8.5Z"
                      fill="#EBF2BD"
                      fillOpacity="0.5"
                    />
                  </svg>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Pergaminho de contato"
                    className="flex-1 bg-transparent border-0 outline-none font-grenze text-base sm:text-lg placeholder:text-[#EBF2BD]/50"
                    style={{ color: '#EBF2BD' }}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300 font-grenze">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="relative">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border-2"
                  style={{
                    borderColor: '#EBF2BD',
                    background: 'rgba(207, 127, 47, 0.50)',
                  }}
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    className="flex-shrink-0 w-5 h-5 sm:w-7 sm:h-7"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.7084 22.9583C29.8946 22.9583 31.6667 21.1861 31.6667 19C31.6667 16.8139 29.8946 15.0417 27.7084 15.0417C25.5223 15.0417 23.7501 16.8139 23.7501 19C23.7501 21.1861 25.5223 22.9583 27.7084 22.9583ZM27.7084 26.125C24.3175 26.125 21.4799 23.7563 20.7599 20.5833H12.6667V25.3333H6.33337V20.5833H3.16675V17.4167H20.7599C21.4799 14.2437 24.3175 11.875 27.7084 11.875C31.6434 11.875 34.8334 15.065 34.8334 19C34.8334 22.935 31.6434 26.125 27.7084 26.125Z"
                      fill="#EBF2BD"
                      fillOpacity="0.5"
                    />
                  </svg>
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Chave secreta"
                    className="flex-1 bg-transparent border-0 outline-none font-grenze text-base sm:text-lg placeholder:text-[#EBF2BD]/50"
                    style={{ color: '#EBF2BD' }}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-300 font-grenze">{errors.password.message}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    {...register("rememberMe")}
                    type="checkbox"
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-[#EBF2BD] bg-transparent"
                  />
                  <span className="font-grenze text-base sm:text-lg" style={{ color: '#EBF2BD' }}>
                    Lembre-se
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="font-grenze text-base sm:text-lg underline hover:opacity-80 transition-opacity"
                  style={{ color: '#D5A82D' }}
                >
                  Perdeu sua chave?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 sm:py-4 rounded-lg font-grenze text-xl sm:text-2xl font-normal disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
                style={{
                  background: '#CF7F2F',
                  color: '#EBF2BD',
                }}
              >
                {isLoading ? 'Entrando...' : 'CONTINUAR JORNADA'}
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center font-grenze text-sm sm:text-base" style={{ color: '#EBF2BD' }}>
              Ainda não conhece sua história? Crie sua conta e{' '}
              <Link href="/register" className="underline hover:opacity-80 transition-opacity" style={{ color: '#D5A82D' }}>
                desperte seu herói
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden rounded-r-3xl">
          <div className="absolute inset-0 bg-gray-300" />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/94531215b683ea45ba81381247c7039f9f0b4a4a?width=1472"
            alt="Fantasy Castle"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.2) translate(-10%, -8%)' }}
          />
        </div>
      </div>
    </div>
  )
}
