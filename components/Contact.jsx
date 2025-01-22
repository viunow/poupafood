export default function Contact() {
  return (
    <section id="contact" className="bg-green text-white py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Entre em Contato
      </h2>
      <form className="mt-8 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Seu Nome"
          className="w-full p-3 rounded-md bg-white text-black"
        />
        <input
          type="email"
          placeholder="Seu Email"
          className="w-full p-3 rounded-md bg-white text-black"
        />
        <textarea
          rows="4"
          placeholder="Sua Mensagem"
          className="w-full p-3 rounded-md bg-white text-black"
        />
        <button
          type="submit"
          className="w-full p-3 bg-orange text-white rounded-md font-medium hover:bg-darkTeal"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
