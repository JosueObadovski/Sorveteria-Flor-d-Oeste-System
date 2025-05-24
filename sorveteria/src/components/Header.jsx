import { Link } from "react-router-dom"
import logo from "../assets/imagens/logo-transparente.png"

export default function Header() {
  return (
    <header className="absolute top-[50px] left-0 w-[1290px] h-[100px] bg-[#F2B9C9] rounded-tr-[12px] rounded-br-[12px] flex items-center shadow-md z-50">
      {/* Logo com 100px de espaço da borda esquerda */}
      <div className="ml-[100px]">
        <img
          src={logo}
          alt="Logo Flor do Oeste"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>

      {/* Menu com espaçamento adequado e centralizado */}
      <nav className="ml-auto flex gap-[80px] mr-[100px] text-[#890034] font-bungee text-[24px]">
        <Link to="/" className="hover:underline">
          MENU
        </Link>
        <Link to="/sabores" className="hover:underline">
          SABORES
        </Link>
        <Link to="/seja-um-revendedor" className="hover:underline">
          SEJA UM REVENDEDOR
        </Link>
      </nav>
    </header>
  )
}
  