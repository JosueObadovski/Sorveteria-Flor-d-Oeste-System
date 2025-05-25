import landingImage from "../assets/imagens/imagem-landing-page.png"
import produto1 from "../assets/imagens/foto-dos-potes-home.png"
import produto2 from "../assets/imagens/baldes-de-sorvete.png"
import produto3 from "../assets/imagens/balde-de-acai.png"
import produto4 from "../assets/imagens/picoles-de-fruta.png"
import produto5 from "../assets/imagens/copao-home.png"
import produto6 from "../assets/imagens/picole-skimo.png"
import produto7 from "../assets/imagens/picole-brigadeiro.png"
import produto8 from "../assets/imagens/moreninhas.png"
import produto9 from "../assets/imagens/cremoninho.png"
import maoPicoles from "../assets/imagens/mao-de-picoles.png"
import fundoPedidos from "../assets/imagens/fundo-de-pedidos.png"
import logoWhatsapp from "../assets/imagens/logo-whatsapp-fundo-transparente-icone 1.png"
import logoIfood from "../assets/imagens/Logo-Ifood.png"
import setaPedido from "../assets/imagens/seta-pedido.png"
import fundoMapa from "../assets/imagens/fundo-card-mapa.png"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-300 via-fuchsia-400 to-orange-300 min-h-screen pt-[100px] pb-20 px-4">
      <div className="max-w-[1700px] mx-auto">
        {/* Imagem principal */}
        <div className="w-full">
          <img
            src={landingImage}
            alt="Sorvetes Flor do Oeste"
            className="w-full h-auto rounded-[12px]"
          />
        </div>

        {/* Título "Conheça nossos produtos" */}
        <div className="mt-[140px] flex justify-center">
          <div className="w-full h-[90px] bg-[#FDF0EC] rounded-[12px] flex items-center justify-center shadow-lg">
            <h2 className="text-[40px] text-[#890034] font-[Fredoka_One] uppercase">
              Conheça nossos produtos
            </h2>
          </div>
        </div>

        {/* Grade de produtos */}
        <div className="mt-[75px] flex justify-center">
          <div className="flex flex-wrap gap-[30px] w-[1320px] justify-center">
            {[produto1, produto2, produto3].map((src, idx) => (
              <div
                key={`linha1-${idx}`}
                className="bg-white rounded-[16px] shadow-lg overflow-hidden w-[400px] aspect-[4/5]"
              >
                <img
                  src={src}
                  alt={`Produto ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {[produto4, produto5, produto6, produto7].map((src, idx) => (
              <div
                key={`linha2-${idx}`}
                className="bg-white rounded-[16px] shadow-lg overflow-hidden w-[300px] aspect-[3/4]"
              >
                <img
                  src={src}
                  alt={`Produto ${idx + 4}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {[produto8, produto9].map((src, idx) => (
              <div
                key={`linha3-${idx}`}
                className="bg-white rounded-[16px] shadow-lg overflow-hidden w-[640px] aspect-[16/9]"
              >
                <img
                  src={src}
                  alt={`Produto ${idx + 8}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Título "Faça seu pedido conosco" */}
        <div className="mt-[140px] flex justify-center">
          <div className="w-full h-[90px] bg-[#FDF0EC] rounded-[12px] flex items-center justify-center shadow-lg">
            <h2 className="text-[40px] text-[#890034] font-[Fredoka_One] uppercase">
              Faça seu pedido conosco
            </h2>
          </div>
        </div>

        {/* Seção de pedido */}
        <div className="mt-[75px] relative flex justify-center">
          <img
            src={fundoPedidos}
            alt="Fundo pedido"
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-[12px]"
          />
          <img
            src={maoPicoles}
            alt="Mão com picolés"
            className="absolute bottom-[0px] right-[0px] w-[550px] z-10"
          />

          <div className="relative z-10 w-full max-w-[1320px] h-[879px] flex items-center">
            <div className="flex-shrink-0">
              <img
                src={produto5}
                alt="Copão delivery"
                className="w-[580px] object-contain ml-[-150px]"
              />
            </div>

            <div className="ml-[-300px] flex flex-col items-center text-center justify-center flex-2 relative">
              <h3 className="text-[60px] text-[#F9669B] font-bold leading-tight mb-2">
                Quer um Momento
                <br />
                Ainda mais doce ?
              </h3>

              <img
                src={setaPedido}
                alt="Seta indicando botão"
                className="absolute w-[100px] top-[185px] right-[170px]"
              />

              <p className="text-[#F9669B] mb-6 text-[24px] font-medium leading-snug">
                Peça agora pelo nosso Delivery Oficial
                <br />
                ou via WhatsApp!
              </p>

              <div className="flex flex-col gap-[60px]">
                <a
                  href="https://www.ifood.com.br/delivery/foz-do-iguacu-pr/sorveteria-flor-doeste-america/087509e5-1d2a-4b53-b62c-c7a3981fde82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F81727] w-[380px] h-[90px] rounded-full font-semibold flex items-center justify-center text-xl"
                >
                  <img src={logoIfood} alt="iFood" className="w-6 h-6" />
                  <span
                    className="ml-[10px] text-[28px] font-bold"
                    style={{ color: "#FFFFFF" }}
                  >
                    Peça Agora!
                  </span>
                </a>
                <a
                  href="https://wa.me/554599263068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#19A705] text-white w-[380px] h-[90px] rounded-full font-semibold flex items-center gap-4 justify-center text-xl"
                >
                  <img src={logoWhatsapp} alt="WhatsApp" className="w-6 h-6" />
                </a>
              </div>

              <p className="text-[#F9669B] mt-10 text-[30px] font-bold leading-snug max-w-[520px]">
                Escolha seu sabor favorito
                <br />e receba a onde estiver
              </p>
            </div>
          </div>
        </div>

        {/* Título da seção do mapa */}
        <div className="mt-[140px] flex justify-center">
          <div className="w-full h-[90px] bg-[#FDF0EC] rounded-[12px] flex items-center justify-center shadow-lg">
            <h2 className="text-[40px] text-[#890034] font-[Fredoka_One] uppercase">
              Venha Viver Essa Experiência Doce de Perto!
            </h2>
          </div>
        </div>

        {/* Card do Mapa */}
        <div className="mt-[75px] mb-[150px] relative flex justify-center">
          <img
            src={fundoMapa}
            alt="Fundo do mapa"
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-[12px]"
          />
          <div className="relative z-10 w-full max-w-[1320px] h-[879px] px-8 py-16 flex flex-col items-center justify-start">
            <h3 className="text-[64px] text-[#F9669B] font-[Fredoka_One] text-center mb-[25px] leading-tight">
              Descubra onde a Doçura é real
              <br />
              Visite a nossa sorveteria!
            </h3>

            <div className="w-full h-[500px] rounded-[12px] overflow-hidden shadow-lg">
              <iframe
                title="Mapa Sorveteria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.6894371642417!2d-54.594397623924295!3d-25.527528077500028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f691f52a01e597%3A0x50d360eceef7adb2!2sFlor%20d%60Oeste%20Sorvetes!5e0!3m2!1spt-BR!2sbr!4v1716599999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/place/Flor+d%60Oeste+Sorvetes/@-25.5271348,-54.592222,17z/data=!4m6!3m5!1s0x94f691f52a01e597:0x50d360eceef7adb2!8m2!3d-25.5275278!4d-54.5922017!16s%2Fg%2F11v3j9fflx?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[25px] bg-[#890034] text-[#FFFFFF] text-[30px] font-[Fredoka] px-[25px] py-[11px] rounded-[50px] shadow-lg"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
