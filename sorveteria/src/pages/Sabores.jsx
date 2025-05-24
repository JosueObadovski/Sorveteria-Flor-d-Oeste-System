import SaborCard from "../components/SaborCard"

// Imagens Frutas
import limao from "../assets/imagens/picole-fruta-limao.png"
import abacaxi from "../assets/imagens/picole-fruta-abacaxi.png"
import uva from "../assets/imagens/picole-fruta-uva.png"
import acai from "../assets/imagens/picole-fruta-acai.png"
import melancia from "../assets/imagens/picole-fruta-melancia.png"
import groselha from "../assets/imagens/picole-fruta-groselha.png"
import abacaxiHortela from "../assets/imagens/picole-fruta-abacaxi-com-hortela.png"

// Imagens Leite
import nata from "../assets/imagens/picole-leite-nata.png"
import leiteCondensado from "../assets/imagens/picole-leite-leite-condensado.png"
import milhoVerde from "../assets/imagens/picole-leite-milho-verde.png"
import maracuja from "../assets/imagens/picole-leite-maracuja.png"
import chocolate from "../assets/imagens/picole-leite-chocolate.png"
import morango from "../assets/imagens/picole-leite-morango.png"
import coco from "../assets/imagens/picole-leite-coco.png"

// Imagens Moreninhas
import morangoMor from "../assets/imagens/Morena-Sabor-Morango.png"
import chocolateBranco from "../assets/imagens/Morena-Sabor-Chocolate Branco.png"
import chocolateMor from "../assets/imagens/Morena-Sabor-Chocolate.png"
import flocos from "../assets/imagens/Morena-Sabor-Flocos.png"
import cocoMor from "../assets/imagens/Morena-Sabor-Coco.png"
import creme from "../assets/imagens/Morena-Sabor-Creme.png"
import leiteCondMor from "../assets/imagens/Morena-Sabor-Leite Condensado.png"
import nataMor from "../assets/imagens/Morena-Sabor-Nata.png"

// Imagens Potes 2L
import poteFlocosChoc from "../assets/imagens/Pote-2L-Flocos-e-Chocolate.png"
import poteFlocosLeiteCond from "../assets/imagens/Pote-2L-Flocos-e-Leite-Condensado.png"
import poteLeiteCondChoc from "../assets/imagens/Pote-2L-Leite-Condensado-e-Chocolate.png"
import poteMorangoChoc from "../assets/imagens/Pote-2L-Morango-e-Chocolate.png"
import poteMorangoFlocos from "../assets/imagens/Pote-2L-Morango-e-Flocos.png"
import poteMorangoLeiteCond from "../assets/imagens/Pote-2L-Morango-e-Leite-Condensado.png"

const saboresFruta = [
  { nome: "Limão", imagem: limao, alt: "Picolé de limão" },
  { nome: "Abacaxi", imagem: abacaxi, alt: "Picolé de abacaxi" },
  { nome: "Uva", imagem: uva, alt: "Picolé de uva" },
  { nome: "Açaí", imagem: acai, alt: "Picolé de açaí" },
  { nome: "Melancia", imagem: melancia, alt: "Picolé de melancia" },
  { nome: "Groselha", imagem: groselha, alt: "Picolé de groselha" },
  {
    nome: "Abacaxi com Hortelã",
    imagem: abacaxiHortela,
    alt: "Picolé de abacaxi com hortelã",
  },
]

const saboresLeite = [
  { nome: "Nata", imagem: nata, alt: "Picolé de nata" },
  {
    nome: "Leite Condensado",
    imagem: leiteCondensado,
    alt: "Picolé de leite condensado",
  },
  { nome: "Milho Verde", imagem: milhoVerde, alt: "Picolé de milho verde" },
  { nome: "Maracujá", imagem: maracuja, alt: "Picolé de maracujá" },
  { nome: "Chocolate", imagem: chocolate, alt: "Picolé de chocolate" },
  { nome: "Morango", imagem: morango, alt: "Picolé de morango" },
  { nome: "Coco", imagem: coco, alt: "Picolé de coco" },
]

const saboresMoreninha = [
  { nome: "Morango", imagem: morangoMor, alt: "Moreninha sabor morango" },
  {
    nome: "Chocolate Branco",
    imagem: chocolateBranco,
    alt: "Moreninha sabor chocolate branco",
  },
  { nome: "Chocolate", imagem: chocolateMor, alt: "Moreninha sabor chocolate" },
  { nome: "Flocos", imagem: flocos, alt: "Moreninha sabor flocos" },
  { nome: "Nata", imagem: nataMor, alt: "Moreninha sabor nata" },
  { nome: "Coco", imagem: cocoMor, alt: "Moreninha sabor coco" },
  { nome: "Creme", imagem: creme, alt: "Moreninha sabor creme" },
  {
    nome: "Leite Condensado",
    imagem: leiteCondMor,
    alt: "Moreninha sabor leite condensado",
  },
]

const saboresPote2L = [
  {
    nome: "Flocos & Chocolate",
    imagem: poteFlocosChoc,
    alt: "Pote 2L Flocos e Chocolate",
  },
  {
    nome: "Flocos & Leite Condensado",
    imagem: poteFlocosLeiteCond,
    alt: "Pote 2L Flocos e Leite Condensado",
  },
  {
    nome: "Leite Condensado & Chocolate",
    imagem: poteLeiteCondChoc,
    alt: "Pote 2L Leite Condensado e Chocolate",
  },
  {
    nome: "Morango & Chocolate",
    imagem: poteMorangoChoc,
    alt: "Pote 2L Morango e Chocolate",
  },
  {
    nome: "Morango & Flocos",
    imagem: poteMorangoFlocos,
    alt: "Pote 2L Morango e Flocos",
  },
  {
    nome: "Morango & Leite Condensado",
    imagem: poteMorangoLeiteCond,
    alt: "Pote 2L Morango e Leite Condensado",
  },
]

const Sabores = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-fuchsia-400 to-orange-300 pt-[160px] pb-20">
      {/* Frutas */}
      <div className="bg-[#FDF0EC] rounded-[20px] px-[80px] py-[50px] max-w-[1320px] mx-auto">
        <h2 className="text-[40px] text-[#FDF0EC] font-fredoka font-bold mb-10 -mt-[110px] ml-[-80px]">
          Sabores Picolés de Fruta
        </h2>
        <div className="grid grid-cols-4 gap-x-[80px] gap-y-[50px] justify-items-center">
          {saboresFruta.map((sabor) => (
            <SaborCard key= {sabor.nome} {...sabor} />
          ))}
        </div>
      </div>

      {/* Leite */}
      <div className="bg-[#FDF0EC] rounded-[20px] px-[80px] py-[50px] max-w-[1320px] mx-auto mt-[150px]">
        <h2 className="text-[40px] text-[#FDF0EC] font-fredoka font-bold mb-10 -mt-[110px] ml-[-80px]">
          Sabores Picolés de Leite
        </h2>
        <div className="grid grid-cols-4 gap-x-[80px] gap-y-[50px] justify-items-center">
          {saboresLeite.map((sabor) => (
            <SaborCard key={sabor.nome} {...sabor} />
          ))}
        </div>
      </div>

      {/* Moreninhas */}
      <div className="bg-[#FDF0EC] rounded-[20px] px-[80px] py-[50px] max-w-[1320px] mx-auto mt-[150px]">
        <h2 className="text-[40px] text-[#FDF0EC] font-fredoka font-bold mb-10 -mt-[110px] ml-[-80px]">
          Moreninhas
        </h2>
        <div className="grid grid-cols-4 gap-x-[80px] gap-y-[50px] justify-items-center">
          {saboresMoreninha.map((item) => (
            <SaborCard key={item.nome} {...item} />
          ))}
        </div>
      </div>

      {/* Potes 2L */}
      <div className="bg-[#FDF0EC] rounded-[20px] px-[80px] py-[50px] max-w-[1320px] mx-auto mt-[150px] mb-[100px]">
        <h2 className="text-[40px] text-[#FDF0EC] font-fredoka font-bold mb-10 -mt-[110px] ml-[-80px]">
          Potes de 2L
        </h2>
        <div className="grid grid-cols-3 gap-x-[80px] gap-y-[50px] justify-items-center">
          {saboresPote2L.map((item) => (
            <SaborCard key={item.nome} {...item} large />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sabores
