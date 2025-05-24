import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Sabores from "./pages/Sabores"
import Revendedor from "./pages/Revendedor"
import fundo from "./assets/imagens/fundo-do-site.png"

export default function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <Header />
        <main className="pt-[140px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sabores" element={<Sabores />} />
            <Route path="/seja-um-revendedor" element={<Revendedor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
