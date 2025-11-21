"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AssinaturasPage() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen py-4 bg-[#2D1705] overflow-x-hidden">
      {/* Dragon watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <svg 
          viewBox="0 0 1062 676" 
          className="w-full h-auto max-w-[1062px] opacity-100"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M442.715 0V2.55963C396.27 55.6868 362.641 118.094 344.258 185.275C317.486 277.721 305.494 373.579 308.636 469.48C308.542 471.086 308.542 472.695 308.636 474.301C314.895 446.592 325.663 420.013 340.541 395.549C355.532 370.741 376.226 349.579 401.031 333.691C399.925 336.422 398.42 338.512 398.42 340.858C385.193 371.318 377.298 403.681 375.056 436.631C370.427 489.276 387.538 541.555 422.669 582.104C424.582 584.852 426.255 587.749 427.67 590.764L430.723 587.991C421.919 554.429 424.052 519.067 436.83 486.715C462.406 581.251 528.339 637.648 615.911 676C509.533 675.573 406.916 660.002 319.566 596.822C318.902 619.56 326.115 637.691 350.364 675.36C276.333 639.568 244.03 580.227 235.932 504.206C216.02 527.072 202.523 554.46 196.638 583.81C190.974 611.796 188.142 640.421 183.982 668.022C152.565 593.494 153.627 514.743 164.335 432.877C69.772 486.118 30.6989 572.207 0.564331 664.439C-1.08472 614.682 0.881836 564.875 6.44958 515.383C13.9722 442.945 32.5573 372.043 61.6741 304.853C88.2997 241.272 128.074 183.584 178.573 135.302C229.073 87.0208 289.24 49.157 355.409 24.0179C383.44 12.7574 412.741 4.69666 442.715 0ZM563.696 4.69265C577.236 26.9615 589.671 49.9129 604.981 70.3473C620.595 92.8614 637.434 114.563 655.427 135.362C660.706 141.015 667.134 145.561 674.313 148.716C681.491 151.872 689.267 153.571 697.155 153.706L677.464 64.8441C680.103 67.0869 682.254 69.8131 683.791 72.8643C697.066 92.4882 709.988 112.453 723.971 131.395C727.377 136.314 732.371 140.013 738.179 141.918C743.987 143.824 750.285 143.828 756.097 141.932C777.912 135.789 799.772 129.902 821.587 123.161C824.022 121.995 826.807 121.698 829.448 122.323C832.089 122.947 834.414 124.453 836.013 126.574C854.422 147.124 873.949 166.719 894.512 185.275C942.126 225.931 993.633 259.76 1062 255.153V257.926C1042.8 301.696 1023.77 345.508 1003.68 389.065C997.181 402.411 986.501 413.453 973.145 420.634C976.865 402.543 979.568 384.272 981.243 365.9C982.305 343.589 977.083 339.578 953.94 337.445C952.976 337.238 951.978 337.215 951.004 337.379C950.031 337.544 949.1 337.891 948.266 338.402C947.432 338.913 946.71 339.578 946.143 340.358C945.575 341.138 945.172 342.018 944.958 342.949C941.683 350.926 937.745 358.733 934.072 366.753C929.47 357.069 925.532 347.983 920.974 339.365C919.513 336.803 917.186 334.801 914.38 333.691C904.557 329.681 894.468 326.524 884.025 322.727L876.192 337.915C869.422 322.983 863.094 308.223 855.837 293.676C853.925 290.211 850.759 287.544 846.94 286.183C843.122 284.822 838.918 284.862 835.128 286.295V296.619C838.691 335.185 831.142 373.952 813.312 408.646C807.187 422.941 803.008 437.94 800.878 453.269C799.108 460.18 802.781 464.233 809.551 464.233L827.251 466.11C822.887 469.198 818.881 472.73 815.304 476.647C811.985 480.657 807.383 488.165 808.932 490.298C813.529 495.51 819.487 499.442 826.189 501.689C830.732 503.024 835.585 503.024 840.128 501.689C852.242 498.315 864.2 494.443 875.971 490.085C882.254 487.415 888.371 484.396 894.291 481.041L897.831 485.051L866.147 511.159C858.873 517.748 850.194 522.727 840.716 525.748C831.239 528.769 821.192 529.76 811.277 528.65C805.541 528.645 799.863 527.55 794.566 525.429C789.27 523.308 784.458 520.201 780.407 516.287C776.355 512.374 773.143 507.729 770.954 502.618C768.764 497.507 767.64 492.031 767.646 486.502C765.655 473.447 767.425 460.223 765.655 447.168C765.267 431.153 761.419 415.392 754.356 400.892C747.293 386.392 737.17 373.471 724.635 362.956C745.274 368.378 763.899 379.323 778.355 394.525C781.009 378.517 782.178 362.313 781.85 346.105C783.177 328.854 777.416 311.791 765.809 298.599C754.203 285.406 737.682 277.141 719.811 275.587C695.678 270.66 671.35 266.661 646.886 263.6C611.265 260.187 576.13 253.105 542.057 242.526C519.329 235.031 498.235 223.547 479.841 208.653C521.683 217.34 564.183 222.761 606.928 224.864C534.291 175.316 481.247 103.467 456.477 21.0743C503.205 84.212 553.916 143.382 627.726 178.961C600.664 122.96 579.223 64.6325 563.696 4.69265ZM821.145 170.344C822.472 176.871 823.534 183.355 825.304 189.712C828.579 202.083 832.517 214.327 835.792 226.741C836.002 228.834 837.018 230.775 838.64 232.181C840.262 233.587 842.372 234.355 844.553 234.335C861.545 236.254 878.361 238.729 896.902 241.032L821.145 170.344ZM646.046 285.741C654.602 285.898 663.135 286.654 671.578 288.002C695.121 289.493 717.781 297.213 737.069 310.313C743.643 314.599 748.885 320.527 752.236 327.462C755.588 334.397 756.922 342.08 756.097 349.689C752.493 341.468 746.532 334.409 738.914 329.339C731.296 324.269 722.336 321.398 713.085 321.064C686.177 318.304 659.027 323.355 635.116 335.568C613.433 345.551 600.954 367.99 604.318 390.942C607.291 413.267 618.004 433.968 634.718 449.685C658.767 473.591 687.574 492.57 719.413 505.485C756.389 520.797 790.948 541.046 822.074 565.637C856.428 593.186 878.533 632.373 883.848 675.147H621.841C630.012 655.029 630.059 632.688 621.972 612.539C613.886 592.389 598.254 575.896 578.165 566.32L589.671 613.886C560.839 581.588 541.806 542.248 534.667 500.196C527.1 517.558 523.826 536.372 525.109 555.143C507.598 516.742 500.882 474.573 505.639 432.877L482.717 456.81C484.886 439.746 486.7 424.601 488.647 409.456C490.756 385.593 499.547 362.731 514.082 343.308C528.617 323.886 548.35 308.634 571.174 299.179C594.901 289.765 620.394 285.189 646.046 285.741Z" fill="#EBF2BD" fillOpacity="0.15"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Title */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-fit mx-auto rounded-lg bg-[#D5A82D] px-8 sm:px-12 py-3 sm:py-4 shadow-lg">
            <h1 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#5B300B] text-center">
              Assinaturas
            </h1>
          </div>
        </div>

        {/* Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* AVENTUREIRO - Free */}
          <div className="flex flex-col">
            <h2 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#FFC592] text-center mb-4">
              AVENTUREIRO
            </h2>
            
            <div className="flex-1 rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] p-6 mb-4">
              <div className="font-grenze text-xl sm:text-2xl space-y-3">
                <p className="font-bold text-[#5B300B]">GRÁTIS</p>
                <p className="text-[#FFC592]">R$ 0,00 / mês</p>
                <p className="text-[#5B300B] leading-relaxed">
                  Ideal para novos heróis!<br/>
                  Monte campanhas básicas,<br/>
                  crie personagens e jogue online com seus amigos.<br/>
                  Acesso a rolagens de dados<br/>
                  Fichas de personagens padrão<br/>
                  Até 3 campanhas ativas<br/>
                  Armazenamento limitado
                </p>
              </div>
            </div>

            <button className="rounded-lg bg-[#D5A82D] px-6 py-4 font-grenze text-2xl sm:text-3xl text-[#5B300B] hover:brightness-110 transition-all shadow-lg">
              JOGUE AGORA GRÁTIS!
            </button>
          </div>

          {/* MESTRE - Intermediate */}
          <div className="flex flex-col">
            <h2 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#FFC592] text-center mb-4">
              MESTRE
            </h2>
            
            <div className="flex-1 rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] p-6 mb-4">
              <div className="font-grenze text-xl sm:text-2xl space-y-3">
                <p className="font-bold text-[#5B300B]">ILIMITADO INTERMEDIÁRIO</p>
                <p className="text-[#FFC592]">12x R$ 24,90</p>
                <p className="text-[#5B300B] leading-relaxed">
                  Domine o campo de batalha com mais poder.<br/>
                  Inclui ferramentas aprimoradas para mestres e criadores de conteúdo.<br/>
                  Mapas personalizados e upload de imagens<br/>
                  Fichas automáticas com macros<br/>
                  Até 10 campanhas ativas<br/>
                  Armazenamento expandido<br/>
                  Acesso antecipado a eventos e atualizações
                </p>
              </div>
            </div>

            <button className="rounded-lg bg-[#D5A82D] px-6 py-4 font-grenze text-2xl sm:text-3xl text-[#5B300B] hover:brightness-110 transition-all shadow-lg">
              SEJA UM MESTRE!
            </button>
          </div>

          {/* Herói - Complete */}
          <div className="flex flex-col">
            <h2 className="font-grenze text-3xl sm:text-4xl md:text-5xl text-[#FFC592] text-center mb-4">
              Herói
            </h2>
            
            <div className="flex-1 rounded-lg border-2 border-[#EBF2BD] bg-[#CF7F2F] p-6 mb-4">
              <div className="font-grenze text-xl sm:text-2xl space-y-3">
                <p className="font-bold text-[#5B300B]">ILIMITADO COMPLETO</p>
                <p className="text-[#FFC592]">12x R$ 49,90</p>
                <p className="text-[#5B300B] leading-relaxed">
                  A verdadeira força dos deuses do RPG.<br/>
                  Tenha todos os recursos desbloqueados e suporte prioritário.<br/>
                  IA para NPCs e geração de aventuras<br/>
                  Campanhas e jogadores ilimitados<br/>
                  Banco de assets premium (mapas, tokens, trilhas sonoras)<br/>
                  Ferramentas avançadas de automação<br/>
                  Acesso antecipado a novos módulos e eventos
                </p>
              </div>
            </div>

            <button className="rounded-lg bg-[#D5A82D] px-6 py-4 font-grenze text-2xl sm:text-3xl text-[#5B300B] hover:brightness-110 transition-all shadow-lg">
              TORNE-SE HERÓI!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
