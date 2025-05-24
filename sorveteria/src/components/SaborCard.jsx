const SaborCard = ({ nome, imagem, alt }) => {
  return (
    <div className="flex flex-col items-center bg-[#FFF7F3] p-4 rounded-xl border border-black w-[180px] h-[300px]">
      <img src={imagem} alt={alt} className="w-full h-[250px] object-contain" />
      <span className="text-[#A970FB] font-bungee text-sm text-center mt-[10px]">
        {nome}
      </span>
    </div>
  )
}

export default SaborCard
