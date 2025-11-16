"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginInput } from "@/lib/auth-schemas"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
  setIsLoading(true);
  setError(null);

  try {
    const { data: user, error } = await supabase
      .from("Users")
      .select("*")
      .eq("email", data.email)
      .eq("password", data.password)
      .single();

    if (error || !user) throw new Error("Usuário ou senha incorretos 🧙‍♂️");

    // remove senha antes de salvar localmente (opcional)
    const { password, ...userWithoutPassword } = user;

    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    router.push("/");
  } catch (err: any) {
    setError(err.message || "Erro ao entrar no reino ⚔️");
  } finally {
    setIsLoading(false);
  }
};

const handleSocialLogin = async (provider: "google" | "facebook" | "twitter") => {
  try {
    setError(null);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });

    if (error) throw error;

  } catch (err: any) {
    setError(err.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/e536bfb998e5457b9a8068070d9953c6df585b16?width=2944)',
          filter: 'blur(5px)',
        }}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-6xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Panel - Form */}
        <div
          className="flex-1 p-8 lg:p-12 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 17.71%, rgba(255, 237, 37, 0.11) 83.65%), rgba(115, 53, 8, 0.85)',
            boxShadow:
              '0 752px 210px 0 rgba(0, 0, 0, 0.01), 0 481px 192px 0 rgba(0, 0, 0, 0.04), 0 271px 162px 0 rgba(0, 0, 0, 0.15), 0 120px 120px 0 rgba(0, 0, 0, 0.26), 0 30px 66px 0 rgba(0, 0, 0, 0.29)',
          }}
        >
          <div className="max-w-md mx-auto space-y-6">
            {/* Title */}
            <h1
              className="text-center font-grenze text-4xl lg:text-5xl font-normal"
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
              className="text-center font-grenze text-2xl lg:text-3xl font-normal"
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
              className="text-center font-grenze text-xl lg:text-2xl font-normal"
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Username Input */}
              <div className="relative">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border-2"
                  style={{
                    borderColor: '#EBF2BD',
                    background: 'rgba(207, 127, 47, 0.50)',
                  }}
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <g clipPath="url(#clip0_10_15)">
                      <path
                        d="M28.6499 0.962425C28.3345 0.641612 27.9067 0.438612 27.4899 0.304487C26.9983 0.157922 26.4919 0.0667315 25.98 0.0326124C24.8563 -0.0562001 23.4534 0.0326124 21.8983 0.3498C18.7862 0.9878 14.9782 2.56467 11.4456 5.61874C7.91304 8.6728 5.70361 12.3685 4.63423 15.4479C4.10136 16.9831 3.83673 18.4095 3.85667 19.5587C3.86573 20.1314 3.94729 20.6824 4.13579 21.1537C4.166 21.2274 4.19984 21.3011 4.23729 21.3748C2.81158 23.3905 1.44675 25.4486 0.144669 27.5464C0.0135528 27.7583 -0.0300624 28.0129 0.0230342 28.2564C0.0761308 28.4999 0.221783 28.7132 0.429232 28.8514C0.531651 28.918 0.64639 28.9633 0.766658 28.9848C0.886927 29.0063 1.01028 29.0034 1.12942 28.9764C1.24856 28.9494 1.36107 28.8987 1.46029 28.8274C1.5595 28.7561 1.64341 28.6657 1.70704 28.5614C2.95394 26.5547 4.25827 24.5843 5.61842 22.6526C6.13498 22.9082 6.73492 23.006 7.35479 22.9825C8.28461 22.9462 9.34492 22.6417 10.4777 22.0944C12.7434 20.9978 15.4512 18.8554 18.2769 15.4932L21.0283 12.6839C21.2027 12.5045 21.3002 12.2643 21.3002 12.0141C21.3002 11.764 21.2027 11.5237 21.0283 11.3444L19.707 9.99592L22.0832 10.3747C22.229 10.3983 22.3784 10.3859 22.5184 10.3385C22.6583 10.2911 22.7846 10.2102 22.8861 10.1029L24.0878 8.86311C25.2895 7.63061 26.4295 6.46155 27.2832 5.43386C27.8524 4.74874 28.3435 4.07086 28.6499 3.42742C28.9453 2.80211 29.1537 2.02636 28.8529 1.27417C28.8075 1.15734 28.7384 1.05119 28.6499 0.962425ZM6.76573 21.0612C9.75998 16.9904 13.1222 13.0772 16.8722 9.77661L19.0654 12.0132L16.9429 14.181L16.894 14.2354C14.1752 17.4779 11.654 19.4318 9.68567 20.3852C8.69967 20.8619 7.89129 21.0703 7.28592 21.092C7.11185 21.1004 6.93739 21.0913 6.76573 21.0612ZM19.0345 7.97499C21.4089 6.11174 23.9283 4.50586 26.5963 3.26249C26.3696 3.58966 26.1277 3.90599 25.8713 4.21042C25.0702 5.17649 24.008 6.2658 22.8245 7.48017L21.9001 8.42992L19.0345 7.97499ZM25.0992 1.89042C17.3888 5.70392 10.9562 12.325 5.70723 19.3539C5.71992 18.5129 5.92654 17.3855 6.37786 16.0805C7.34392 13.2983 9.36848 9.8908 12.64 7.06149C15.9152 4.23217 19.4297 2.78399 22.2644 2.20399C23.1967 2.00657 24.1462 1.90154 25.0992 1.89042Z"
                        fill="#EBF2BD"
                        fillOpacity="0.4"
                      />
                    </g>
                  </svg>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="E-mail"
                    className="flex-1 bg-transparent border-0 outline-none font-grenze text-lg placeholder:text-[#EBF2BD]/50"
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
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
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
                    className="flex-1 bg-transparent border-0 outline-none font-grenze text-lg placeholder:text-[#EBF2BD]/50"
                    style={{ color: '#EBF2BD' }}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-300 font-grenze">{errors.password.message}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    {...register("rememberMe")}
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-[#EBF2BD] bg-transparent"
                  />
                  <span className="font-grenze text-lg" style={{ color: '#EBF2BD' }}>
                    Lembre-se
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="font-grenze text-lg underline"
                  style={{ color: '#D5A82D' }}
                >
                  Perdeu sua chave?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-lg font-grenze text-2xl font-normal disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                style={{
                  background: '#CF7F2F',
                  color: '#EBF2BD',
                }}
              >
                {isLoading ? 'Entrando...' : 'CONTINUAR JORNADA'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: '#EBF2BD' }} />
              <span className="font-grenze text-lg" style={{ color: '#EBF2BD' }}>
                OR
              </span>
              <div className="flex-1 h-px" style={{ background: '#EBF2BD' }} />
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-6">
              <button
                onClick={() => handleSocialLogin("google")}
                className="hover:scale-110 transition-transform"
              >
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44.0834 19.1667V28.75H42.1667V32.5834H40.2501V36.4167H38.3334V38.3334H36.4167V40.25H32.5834V42.1667H28.7501V44.0834H17.2501V42.1667H13.4167V40.25H9.58341V38.3334H7.66675V36.4167H5.75008V32.5834H3.83341V28.75H1.91675V17.25H3.83341V13.4167H5.75008V9.58335H7.66675V7.66669H9.58341V5.75002H13.4167V3.83335H17.2501V1.91669H28.7501V3.83335H32.5834V5.75002H36.4167V9.58335H34.5001V11.5H32.5834V13.4167H28.7501V11.5H17.2501V13.4167H13.4167V17.25H11.5001V28.75H13.4167V32.5834H17.2501V34.5H28.7501V32.5834H32.5834V28.75H34.5001V26.8334H23.0001V19.1667H44.0834Z"
                    fill="#EBF2BD"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleSocialLogin("facebook")}
                className="hover:scale-110 transition-transform"
              >
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44.0834 17.25V28.75H42.1667V32.5834H40.2501V36.4167H38.3334V38.3334H36.4167V40.25H32.5834V42.1667H28.7501V44.0834H26.8334V28.75H30.6667V26.8334H32.5834V23H26.8334V17.25H28.7501V15.3334H32.5834V9.58335H24.9167V11.5H21.0834V15.3334H19.1667V23H13.4167V28.75H19.1667V44.0834H17.2501V42.1667H13.4167V40.25H9.58342V38.3334H7.66675V36.4167H5.75008V32.5834H3.83341V28.75H1.91675V17.25H3.83341V13.4167H5.75008V9.58335H7.66675V7.66669H9.58342V5.75002H13.4167V3.83335H17.2501V1.91669H28.7501V3.83335H32.5834V5.75002H36.4167V7.66669H38.3334V9.58335H40.2501V13.4167H42.1667V17.25H44.0834Z"
                    fill="#EBF2BD"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleSocialLogin("twitter")}
                className="hover:scale-110 transition-transform"
              >
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M45.8333 10.4167H47.9166V12.5H45.8333V10.4167ZM45.8333 6.25H47.9166V8.33333H45.8333V6.25ZM43.7499 10.4167V12.5H45.8333V14.5833H43.7499V25H41.6666V29.1667H39.5833V33.3333H37.4999V35.4167H35.4166V37.5H33.3333V39.5833H29.1666V41.6667H22.9166V43.75H8.33325V41.6667H4.16659V39.5833H2.08325V37.5H6.24992V39.5833H12.4999V37.5H14.5833V35.4167H10.4166V33.3333H8.33325V31.25H6.24992V29.1667H10.4166V27.0833H6.24992V25H4.16659V20.8333H8.33325V18.75H6.24992V16.6667H4.16659V8.33333H6.24992V10.4167H8.33325V12.5H10.4166V14.5833H14.5833V16.6667H20.8333V18.75H24.9999V10.4167H27.0833V8.33333H29.1666V6.25H39.5833V8.33333H45.8333V10.4167H43.7499Z"
                    fill="#EBF2BD"
                  />
                </svg>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center font-grenze text-base" style={{ color: '#EBF2BD' }}>
              Ainda não conhece sua história? Crie sua conta e{' '}
              <Link href="/register" className="underline" style={{ color: '#D5A82D' }}>
                desperte seu herói
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-300 rounded-r-lg" />
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
