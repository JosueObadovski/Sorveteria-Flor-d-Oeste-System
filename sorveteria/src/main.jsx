import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx" // Você já criou esse componente em outro arquivo

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
