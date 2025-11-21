"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/useUser"
import Link from "next/link"

export default function ContaPage() {
  const router = useRouter()
  const { user, loading } = useUser()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#2D1705]">
        <p className="font-grenze text-2xl text-[#FFC592]">Carregando...</p>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen py-4 bg-[#2D1705] overflow-x-hidden">
      {/* Dragon watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <svg 
          viewBox="0 0 853 853" 
          className="w-[853px] h-[853px] opacity-100"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M355.594 144.903V147.036C318.29 191.297 291.28 243.291 276.514 299.261C255.012 376.28 245.38 456.142 247.903 536.039C247.827 537.377 247.827 538.718 247.903 540.056C252.93 516.971 261.579 494.827 273.529 474.446C285.569 453.778 302.191 436.147 322.114 422.91C321.226 425.185 320.017 426.926 320.017 428.881C309.393 454.258 303.052 481.221 301.251 508.672C297.533 552.532 311.276 596.087 339.494 629.869C341.03 632.159 342.374 634.572 343.51 637.084L345.963 634.774C338.892 606.813 340.604 577.352 350.867 550.398C371.41 629.159 424.368 676.145 494.704 708.097C409.262 707.741 326.841 694.768 256.682 642.131C256.149 661.075 261.942 676.18 281.419 707.564C221.958 677.744 196.012 628.306 189.508 564.97C173.514 584.021 162.674 606.838 157.947 631.291C153.398 654.606 151.123 678.455 147.782 701.45C122.548 639.359 123.401 573.749 132.002 505.545C56.0493 549.901 24.666 621.624 0.462097 698.465C-0.862427 657.011 0.717102 615.515 5.18915 574.282C11.2312 513.932 26.1587 454.862 49.5451 398.884C70.9306 345.914 102.877 297.852 143.438 257.627C183.998 217.403 232.324 185.857 285.471 164.913C307.985 155.532 331.52 148.816 355.594 144.903ZM452.765 148.813C463.641 167.366 473.628 186.487 485.926 203.512C498.467 222.269 511.992 240.349 526.443 257.677C530.683 262.387 535.846 266.174 541.612 268.803C547.378 271.432 553.623 272.847 559.959 272.96L544.143 198.927C546.263 200.795 547.991 203.066 549.225 205.608C559.888 221.958 570.266 238.591 581.497 254.372C584.233 258.47 588.244 261.552 592.909 263.139C597.574 264.727 602.633 264.73 607.3 263.15C624.823 258.032 642.38 253.128 659.902 247.512C661.858 246.54 664.095 246.293 666.216 246.813C668.337 247.334 670.205 248.589 671.489 250.355C686.275 267.477 701.959 283.801 718.475 299.261C756.718 333.132 798.088 361.317 853 357.478V359.788C837.575 396.254 822.292 432.755 806.156 469.043C800.937 480.162 792.359 489.362 781.632 495.344C784.62 480.272 786.791 465.05 788.136 449.744C788.989 431.156 784.796 427.815 766.207 426.038C765.432 425.865 764.631 425.846 763.849 425.983C763.067 426.12 762.32 426.409 761.65 426.835C760.98 427.261 760.4 427.815 759.944 428.465C759.488 429.114 759.165 429.848 758.992 430.623C756.362 437.269 753.199 443.773 750.249 450.455C746.553 442.387 743.39 434.817 739.729 427.637C738.555 425.503 736.686 423.835 734.433 422.91C726.543 419.569 718.439 416.939 710.051 413.776L703.761 426.429C698.323 413.989 693.24 401.692 687.411 389.572C685.876 386.685 683.333 384.464 680.266 383.33C677.199 382.196 673.822 382.23 670.778 383.423V392.025C673.64 424.155 667.576 456.452 653.256 485.357C648.336 497.266 644.979 509.762 643.269 522.534C641.847 528.291 644.797 531.668 650.235 531.668L664.451 533.232C660.946 535.804 657.729 538.747 654.855 542.01C652.19 545.351 648.493 551.607 649.737 553.384C653.43 557.725 658.215 561.001 663.598 562.873C667.247 563.986 671.145 563.986 674.794 562.873C684.524 560.063 694.129 556.837 703.583 553.206C708.63 550.982 713.543 548.466 718.297 545.671L721.14 549.012L695.693 570.764C689.849 576.253 682.879 580.401 675.266 582.918C667.654 585.435 659.585 586.26 651.621 585.336C647.014 585.331 642.454 584.419 638.199 582.652C633.945 580.885 630.08 578.297 626.826 575.036C623.572 571.775 620.992 567.905 619.234 563.648C617.475 559.39 616.572 554.827 616.577 550.22C614.977 539.345 616.399 528.327 614.977 517.451C614.666 504.108 611.576 490.978 605.903 478.897C600.23 466.817 592.099 456.052 582.03 447.292C598.608 451.809 613.567 460.928 625.178 473.593C627.31 460.256 628.249 446.756 627.986 433.253C629.051 418.88 624.424 404.665 615.102 393.674C605.78 382.683 592.51 375.797 578.156 374.502C558.772 370.397 539.233 367.066 519.584 364.515C490.973 361.672 462.753 355.772 435.385 346.958C417.13 340.714 400.188 331.146 385.414 318.738C419.021 325.975 453.157 330.491 487.49 332.243C429.147 290.964 386.543 231.105 366.648 162.461C404.18 215.063 444.911 264.359 504.194 294.001C482.458 247.344 465.237 198.75 452.765 148.813ZM659.547 286.821C660.613 292.259 661.466 297.661 662.888 302.957C665.518 313.264 668.681 323.465 671.311 333.807C671.48 335.551 672.296 337.168 673.599 338.339C674.902 339.51 676.596 340.151 678.348 340.134C691.996 341.733 705.502 343.794 720.394 345.714L659.547 286.821ZM518.908 382.961C525.781 383.093 532.635 383.722 539.416 384.845C558.325 386.088 576.526 392.52 592.018 403.433C597.297 407.004 601.508 411.943 604.2 417.72C606.892 423.498 607.963 429.899 607.3 436.238C604.406 429.39 599.618 423.508 593.5 419.284C587.381 415.06 580.184 412.669 572.754 412.39C551.142 410.091 529.335 414.299 510.13 424.474C492.714 432.791 482.691 451.486 485.393 470.607C487.781 489.207 496.386 506.454 509.81 519.548C529.126 539.464 552.263 555.276 577.836 566.036C607.535 578.793 635.293 595.663 660.293 616.15C687.886 639.102 705.641 671.75 709.909 707.386H499.467C506.03 690.625 506.068 672.012 499.573 655.225C493.078 638.438 480.522 624.698 464.387 616.719L473.628 656.348C450.471 629.439 435.184 596.665 429.45 561.629C423.372 576.095 420.742 591.769 421.773 607.407C407.708 575.415 402.314 540.283 406.135 505.545L387.724 525.484C389.466 511.267 390.923 498.65 392.487 486.032C394.181 466.151 401.242 447.104 412.916 430.922C424.59 414.741 440.44 402.034 458.772 394.157C477.83 386.314 498.305 382.502 518.908 382.961Z" fill="#EBF2BD" fillOpacity="0.15"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button 
          onClick={() => router.back()}
          className="mb-4 hover:opacity-80 transition-opacity"
          aria-label="Voltar"
        >
          <svg 
            width="65" 
            height="65" 
            viewBox="0 0 65 65" 
            className="transform -rotate-90"
          >
            <image 
              href="https://api.builder.io/api/v1/image/assets/TEMP/fb4b177f8e64a0646b34e45ae74032a3591a7869?width=130" 
              width="65" 
              height="65"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-gradient-to-br from-[#5B300B] to-[#3A2308] mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-32 h-32 text-[#EBF2BD] opacity-40">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <button className="font-grenze text-xl sm:text-2xl text-[#EBF2BD] underline hover:opacity-80 transition-opacity mb-4">
                Editar foto
              </button>

              {/* Name display */}
              <div className="w-full max-w-md rounded-md bg-[#D5A82D] shadow-lg px-6 py-4 mb-6">
                <h1 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#5B300B] text-center">
                  {user?.user_metadata?.username || "Aventureiro"}
                </h1>
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block font-grenze text-xl sm:text-2xl text-[#EBF2BD] opacity-50 mb-2 flex items-center gap-2">
                  Primeiro Nome
                </label>
                <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-4 py-3">
                  <input
                    type="text"
                    className="w-full bg-transparent font-grenze text-lg text-[#EBF2BD] placeholder-[#EBF2BD] placeholder-opacity-30 outline-none"
                    placeholder="Digite seu primeiro nome"
                  />
                </div>
              </div>

              <div>
                <label className="block font-grenze text-xl sm:text-2xl text-[#EBF2BD] opacity-50 mb-2 flex items-center gap-2">
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" className="flex-shrink-0">
                    <path d="M28.6499 0.962364C28.3345 0.641551 27.9067 0.438551 27.4899 0.304426C26.9983 0.157861 26.4919 0.0666704 25.98 0.0325514C24.8563 -0.0562611 23.4534 0.0325514 21.8983 0.349739C18.7862 0.987739 14.9782 2.56461 11.4456 5.61868C7.91304 8.67274 5.70361 12.3684 4.63423 15.4479C4.10136 16.983 3.83673 18.4095 3.85667 19.5586C3.86573 20.1314 3.94729 20.6824 4.13579 21.1536C4.166 21.2273 4.19984 21.301 4.23729 21.3747C2.81158 23.3905 1.44675 25.4486 0.144669 27.5463C0.0135528 27.7582 -0.0300624 28.0128 0.0230342 28.2563C0.0761308 28.4998 0.221783 28.7132 0.429232 28.8513C0.531651 28.9179 0.64639 28.9633 0.766658 28.9848C0.886927 29.0062 1.01028 29.0034 1.12942 28.9763C1.24856 28.9493 1.36107 28.8986 1.46029 28.8273C1.5595 28.7561 1.64341 28.6656 1.70704 28.5613C2.95394 26.5546 4.25827 24.5842 5.61842 22.6525C6.13498 22.9081 6.73492 23.006 7.35479 22.9824C8.28461 22.9462 9.34492 22.6417 10.4777 22.0943C12.7434 20.9977 15.4512 18.8554 18.2769 15.4932L21.0283 12.6838C21.2027 12.5045 21.3002 12.2642 21.3002 12.0141C21.3002 11.764 21.2027 11.5237 21.0283 11.3444L19.707 9.99586L22.0832 10.3747C22.229 10.3982 22.3784 10.3858 22.5184 10.3384C22.6583 10.291 22.7846 10.2101 22.8861 10.1028L24.0878 8.86305C25.2895 7.63055 26.4295 6.46149 27.2832 5.4338C27.8524 4.74868 28.3435 4.0708 28.6499 3.42736C28.9453 2.80205 29.1537 2.0263 28.8529 1.27411C28.8075 1.15728 28.7384 1.05112 28.6499 0.962364ZM6.76573 21.0612C9.75998 16.9903 13.1222 13.0771 16.8722 9.77655L19.0654 12.0132L16.9429 14.1809L16.894 14.2353C14.1752 17.4779 11.654 19.4317 9.68567 20.3851C8.69967 20.8618 7.89129 21.0702 7.28592 21.092C7.11185 21.1004 6.93739 21.0913 6.76573 21.0612ZM19.0345 7.97493C21.4089 6.11168 23.9283 4.5058 26.5963 3.26243C26.3696 3.5896 26.1277 3.90593 25.8713 4.21036C25.0702 5.17643 24.008 6.26574 22.8245 7.48011L21.9001 8.42986L19.0345 7.97493ZM25.0992 1.89036C17.3888 5.70386 10.9562 12.3249 5.70723 19.3538C5.71992 18.5128 5.92654 17.3854 6.37786 16.0804C7.34392 13.2982 9.36848 9.89074 12.64 7.06143C15.9152 4.23211 19.4297 2.78393 22.2644 2.20393C23.1967 2.0065 24.1462 1.90148 25.0992 1.89036Z" fill="#EBF2BD" fillOpacity="0.4"/>
                  </svg>
                  Ultimo nome
                </label>
                <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-4 py-3">
                  <input
                    type="text"
                    className="w-full bg-transparent font-grenze text-lg text-[#EBF2BD] placeholder-[#EBF2BD] placeholder-opacity-30 outline-none"
                    placeholder="Digite seu último nome"
                  />
                </div>
              </div>

              <div>
                <label className="block font-grenze text-xl sm:text-2xl text-[#EBF2BD] opacity-50 mb-2 flex items-center gap-2">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="flex-shrink-0">
                    <path d="M27.625 2.125H11.6875C10.2791 2.12669 8.92878 2.68694 7.93286 3.68286C6.93694 4.67878 6.37669 6.02906 6.375 7.4375V23.375H4.25C3.077 23.375 2.125 24.3291 2.125 25.5V27.625C2.125 29.9689 4.03112 31.875 6.375 31.875H21.25C23.5939 31.875 25.5 29.9689 25.5 27.625V10.625H29.75C30.923 10.625 31.875 9.67088 31.875 8.5V6.375C31.875 4.03112 29.9689 2.125 27.625 2.125ZM6.375 29.75C5.202 29.75 4.25 28.7959 4.25 27.625V25.5H17V27.625C17 28.3985 17.2083 29.1252 17.5716 29.75H6.375ZM23.375 27.625C23.3505 28.1721 23.1159 28.6888 22.7201 29.0673C22.3243 29.4458 21.7977 29.6571 21.25 29.6571C20.7023 29.6571 20.1757 29.4458 19.7799 29.0673C19.3841 28.6888 19.1495 28.1721 19.125 27.625V25.5C19.125 24.3291 18.173 23.375 17 23.375H8.5V7.4375C8.5 5.68012 9.93012 4.25 11.6875 4.25H23.9466C23.5728 4.89587 23.3757 5.62877 23.375 6.375V27.625ZM29.75 8.5H25.5V6.375C25.5245 5.82786 25.7591 5.31124 26.1549 4.93271C26.5507 4.55419 27.0773 4.34293 27.625 4.34293C28.1727 4.34293 28.6993 4.55419 29.0951 4.93271C29.4909 5.31124 29.7255 5.82786 29.75 6.375V8.5Z" fill="#EBF2BD" fillOpacity="0.5"/>
                  </svg>
                  Pergaminho de contato
                </label>
                <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-4 py-3">
                  <p className="font-grenze text-lg text-[#EBF2BD]">
                    {user?.email || 'carregando...'}
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-grenze text-xl sm:text-2xl text-[#EBF2BD] opacity-50 mb-2">
                  Nome de usuário
                </label>
                <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-4 py-3">
                  <input
                    type="text"
                    className="w-full bg-transparent font-grenze text-lg text-[#EBF2BD] placeholder-[#EBF2BD] placeholder-opacity-30 outline-none"
                    placeholder="Digite seu nome de usuário"
                  />
                </div>
              </div>

              <p className="font-itim text-sm sm:text-base text-[#EBF2BD] text-center pt-2">
                Esse é o nome que será exibido para outros usuários do Dead Tree Scribes. 
                Sugerimos utilizar seu primeiro nome seguido da inicial do seu sobrenome.
              </p>
            </div>

            {/* Subscribe Button */}
            <div className="flex justify-center pt-6">
              <Link
                href="/assinaturas"
                className="rounded-lg bg-[#D5A82D] px-8 py-4 font-grenze text-3xl sm:text-4xl md:text-5xl text-[#5B300B] hover:brightness-110 transition-all shadow-lg"
              >
                Quero ser um assinante
              </Link>
            </div>
          </div>

          {/* Right Column - Sections */}
          <div className="space-y-6">
            {/* Conquistas */}
            <div>
              <h2 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#FFC592] text-center mb-4">
                Conquistas
              </h2>
              <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-6 py-8 min-h-[82px] flex items-center justify-center">
                <p className="font-grenze text-lg text-white opacity-40 text-center">
                  Você ainda não ganhou nenhuma conquista.
                </p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#FFC592] text-center mb-4">
                Bio
              </h2>
              <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-6 py-6 min-h-[133px]">
                <textarea
                  className="w-full h-full bg-transparent font-grenze text-lg text-white placeholder-white placeholder-opacity-40 outline-none resize-none"
                  placeholder="Conte-nos um pouco sobre você...&#10;&#10;Clique aqui para escrever sua biografia."
                  rows={4}
                />
              </div>
            </div>

            {/* Gosta de Jogar */}
            <div>
              <h2 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#FFC592] text-center mb-4">
                Gosta de Jogar
              </h2>
              <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-6 py-4 min-h-[49px] flex items-center">
                <input
                  type="text"
                  className="w-full bg-transparent font-grenze text-lg text-white placeholder-white placeholder-opacity-40 outline-none"
                  placeholder="Comece a escrever para escolher novos jogos..."
                />
              </div>
            </div>

            {/* Conquistas (second section) */}
            <div>
              <h2 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#FFC592] text-center mb-4">
                Conquistas
              </h2>
              <div className="rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] bg-opacity-50 px-6 py-6 min-h-[49px] flex items-center justify-center">
                <p className="font-grenze text-lg text-white opacity-40 text-center">
                  Você ainda não ganhou nenhuma conquista.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
