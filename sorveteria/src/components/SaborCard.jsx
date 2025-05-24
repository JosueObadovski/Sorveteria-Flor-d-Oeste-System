const SaborCard = ({ nome, imagem, alt, large }) => {
  return (
    <div
      className={`flex flex-col items-center bg-[#FFF7F3] p-4 rounded-xl border border-black ${
        large ? "w-[220px] h-[320px]" : "w-[180px] h-[300px]"
      }`}
    >
      <img
        src={imagem}
        alt={alt}
        className={`w-full ${large ? "h-[260px]" : "h-[250px]"} object-contain`}
      />
      <span className="text-[#A970FB] font-bungee text-sm text-center mt-[10px]">
        {nome}
      </span>
    </div>
  )
}

export default SaborCard
