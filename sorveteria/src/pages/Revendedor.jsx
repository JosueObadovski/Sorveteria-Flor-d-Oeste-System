import imagem1 from "../assets/imagens/Imagem-1.png"
import imagem2 from "../assets/imagens/Imagem-2.png"
import imagem3 from "../assets/imagens/Imagem-3.png"

export default function Revendedor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-fuchsia-400 to-orange-300 pt-[160px] pb-20">
      <div className="max-w-[1320px] mx-auto px-[80px]">
        {/* Título */}
        <h1 className="text-[96px] text-[#FDF0EC] font-fredoka font-extrabold leading-tight mb-2 text-center">
          Junte-se à Doçura — <br /> Seja um Revendedor
        </h1>
        <p className="text-[36px] text-[#FDF0EC] font-semibold mb-16 text-center">
          Leve os sabores da Sorveteria Flor d’Oeste para ainda mais pessoas.
        </p>

        {/* Lista de Benefícios */}
        <div className="w-full flex justify-center px-4 mb-20">
          <div className="max-w-[1000px] w-full bg-white rounded-[20px] shadow-xl px-[64px] py-[56px] z-10 relative">
            <ul className="list-disc pl-6 text-[#7A3DD4] text-[32px] font-bold space-y-6 leading-snug text-left">
              <li>Faça seu pedido inicial e pague só após vender</li>
              <li>
                Freezer sem custo de locação – manutenção por nossa conta
                (exceto mau uso)
              </li>
              <li>
                Freezer sem custo de locação – manutenção por nossa conta
                (exceto mau uso)
              </li>
              <li>Produtos artesanais e com alta aceitação</li>
            </ul>
          </div>
        </div>

        {/* Como Funciona */}
        <h2 className="text-[84px] text-[#FDF0EC] font-fredoka font-extrabold mb-12 text-center">
          Como Funciona em 3 Passos
        </h2>

        <div className="grid grid-cols-3 gap-[60px] text-center text-[#FDF0EC] font-fredoka">
          <div>
            <img
              src={imagem1}
              alt="Passo 1"
              className="mx-auto w-[250px] h-[250px] mb-4"
            />
            <p className="text-[24px] font-bold">1 - Faça seu Pedido Inicial</p>
          </div>
          <div>
            <img
              src={imagem2}
              alt="Passo 2"
              className="mx-auto w-[250px] h-[250px] mb-4"
            />
            <p className="text-[24px] font-bold">
              2 - Organize o Ponto de Venda
            </p>
          </div>
          <div>
            <img
              src={imagem3}
              alt="Passo 3"
              className="mx-auto w-[250px] h-[250px] mb-4"
            />
            <p className="text-[24px] font-bold">
              3 - Comece a Vender e Ganhar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
