export default function Solution() {
  return (
    <section id="solution" className="bg-white py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-darkTeal text-center">
        Nossa Solução
      </h2>
      <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-center">
        A PoupaFood é uma plataforma inovadora que conecta estabelecimentos com
        excedentes de alimentos a consumidores conscientes, oferecendo
        benefícios econômicos, sociais e ambientais.
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="bg-offWhite shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold text-orange">
            Cadastro dos Parceiros
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Estabelecimentos listam seus excedentes alimentares diretamente no
            app.
          </p>
        </div>
        <div className="bg-offWhite shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold text-orange">Ofertas Visíveis</h3>
          <p className="mt-4 text-sm text-gray-600">
            Produtos excedentes são oferecidos a preços reduzidos para
            consumidores cadastrados.
          </p>
        </div>
        <div className="bg-offWhite shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold text-orange">
            Compra e Retirada Simples
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            O consumidor adquire o produto pelo app e retira diretamente no
            estabelecimento.
          </p>
        </div>
      </div>
      <h3 className="mt-12 text-xl font-bold text-darkTeal text-center">
        Benefícios da PoupaFood
      </h3>
      <ul className="mt-6 space-y-4 max-w-xl mx-auto text-left">
        <li className="text-gray-700">
          <strong>Para os Estabelecimentos:</strong> Gera receita adicional,
          reduz desperdício e melhora a imagem pública.
        </li>
        <li className="text-gray-700">
          <strong>Para os Consumidores:</strong> Produtos de qualidade com
          descontos e participação na redução de desperdícios.
        </li>
        <li className="text-gray-700">
          <strong>Para o Planeta:</strong> Redução de resíduos e emissões de CO₂
          associadas ao desperdício alimentar.
        </li>
      </ul>
    </section>
  );
}
