import logo from "../assets/imagens/logo-transparente.png"
import facebook from "../assets/imagens/Logo-Facebook.png"
import instagram from "../assets/imagens/Logo-Instagram.png"
import tiktok from "../assets/imagens/Logo-TikTok.png"

export default function Footer() {
  return (
    <footer className="bg-[#F2B9C9] text-[#890034] px-12 pt-12 pb-4 mt-auto">
      <div className="flex justify-between items-start flex-wrap gap-8 max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="w-[200px] pt-1">
          <img
            src={logo}
            alt="Logo Flor do Oeste"
            className="w-full object-contain"
          />
        </div>

        {/* Menu */}
        <div className="pt-1 w-[180px]">
          <h3 className="text-lg font-bold font-['Fredoka_One'] mb-2">Menu</h3>
          <div className="flex flex-col gap-2 font-['Fredoka']">
            <span>Home</span>
            <span>Sabores</span>
            <span>Seja um Revendedor</span>
          </div>
        </div>

        {/* Institucional */}
        <div className="pt-1 w-[200px]">
          <h3 className="text-lg font-bold font-['Fredoka_One'] mb-2">
            Institucional
          </h3>
          <div className="flex flex-col gap-2 font-['Fredoka']">
            <span>Nossa História</span>
            <span>Políticas de Privacidade</span>
          </div>
        </div>

        {/* Contato */}
        <div className="pt-1 w-[220px]">
          <h3 className="text-lg font-bold font-['Fredoka_One'] mb-2">
            Contato
          </h3>
          <div className="flex flex-col gap-2 font-['Fredoka']">
            <span>(+55) 45 9926-3068</span>
            <span>contato@exemplo.com</span>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-start pt-1">
          <h3 className="text-lg font-bold font-['Fredoka_One'] mb-2">
            Redes Sociais
          </h3>
          <div className="flex gap-[30px]">
            <img src={facebook} alt="Facebook" className="w-10 h-10" />
            <img src={instagram} alt="Instagram" className="w-10 h-10" />
            <img src={tiktok} alt="TikTok" className="w-10 h-10" />
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-6 font-['Fredoka']">
        © 2025 Sorveteria Flor d’ Oeste. Todos os direitos reservados.
      </p>
    </footer>
  )
}
