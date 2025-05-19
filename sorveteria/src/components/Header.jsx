import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-pink-400 text-white p-4 shadow-md flex justify-center gap-10 font-semibold text-lg">
      <Link to="/">Home</Link>
      <Link to="/sabores">Sabores</Link>
      <Link to="/seja-um-revendedor">Seja um Revendedor</Link>
    </header>
  )
}
