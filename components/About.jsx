export default function About() {
  return (
    <section id="about" className="bg-offWhite py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-darkTeal text-center">
        Sobre a PoupaFood
      </h2>
      <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-center">
        Nossa missão é transformar desperdício em oportunidade. A PoupaFood
        conecta fabricantes e atacadistas do setor alimentício com consumidores
        conscientes, oferecendo uma solução inteligente para o excedente de
        alimentos.
      </p>
      <ul className="mt-6 space-y-4 max-w-xl mx-auto text-left">
        <li className="text-gray-700">
          <strong>Sustentabilidade:</strong> Contribuímos para a redução do
          desperdício e da pegada ambiental.
        </li>
        <li className="text-gray-700">
          <strong>Visibilidade:</strong> Damos destaque aos produtos excedentes
          e fortalecemos a reputação das marcas parceiras.
        </li>
        <li className="text-gray-700">
          <strong>Eficiência:</strong> Desbloqueamos o valor do inventário
          excedente, transformando perdas em ganhos.
        </li>
        <li className="text-gray-700">
          <strong>Acessibilidade:</strong> Consumidores têm acesso a produtos de
          qualidade por preços mais acessíveis.
        </li>
      </ul>
      <blockquote className="mt-8 text-center text-lg font-medium text-orange">
        “Um futuro onde o desperdício não é uma opção, mas uma oportunidade para
        criar valor e cuidar do planeta.”
      </blockquote>
    </section>
  );
}
