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

        <div className="grid grid-cols-3 gap-[60px] text-center text-[#FDF0EC] font-fredoka mb-20">
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

        {/* Formulário de Contato */}
        <div className="flex justify-center items-center mt-24 mb-[185px]">
          <div className="bg-[#FDF0EC] rounded-[12px] shadow-xl px-8 py-12 w-full max-w-[460px] text-center">
            {/* Ícone Envelope grande */}
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[200px] h-[200px] text-[#921CA1]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="text-[#921CA1] text-[40px] font-[Fredoka_One] font-bold leading-tight mb-2">
              Quer se tornar um <br /> revendedor ?
            </h3>
            <p className="text-[#921CA1] text-[24px] font-[fredoka] mb-6 leading-snug">
              Preencha seus dados e <br /> entraremos em contato rapidinho
            </p>

            <form className="flex flex-col gap-[15px] px-[70px] text-left">
              {[
                { label: "Nome:", type: "text", name: "nome" },
                { label: "E-mail:", type: "email", name: "email" },
                { label: "Telefone:", type: "text", name: "telefone" },
                {
                  label: "Cidade e Estado:",
                  type: "text",
                  name: "cidadeEstado",
                },
              ].map((field, idx) => (
                <div
                  key={idx}
                  className="flex items-center h-[50px] bg-[#F2B9C9] border border-[#890034] rounded-[12px]"
                >
                  <label
                    htmlFor={field.name}
                    className="text-[#890034] font-fredoka text-[15px] pl-[15px] py-[15px] w-[130px]"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="flex-1 h-full bg-transparent outline-none border-none text-[#890034] text-[15px] font-semibold pr-4"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="bg-[#F25E9C] text-[#FFFFFF] text-[20px] font-[Fredoka_One] font-extrabold h-[50px] rounded-[12px] mt-2 hover:brightness-95 transition border-none outline-none"
              >
                Quero Ser Revendedor
              </button>
            </form>

            <p className="text-[#921CA1] text-[18px] font-[fredoka] mt-6 capitalize">
              Garantimos a segurança dos seus dados sem spam
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
