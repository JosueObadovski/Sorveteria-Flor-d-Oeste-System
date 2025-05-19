import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Sabores from "./pages/Sabores"
import Revendedor from "./pages/Revendedor"

export default function App() {
  return (
    <Router>
      <div className="bg-pink-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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
