import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";

export default function HomePage() {
  return (
    <div className="bg-white text-dark">
      {/* Navbar */}
      <header className="bg-white text-black px-6 py-2 top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* <div className="text-2xl font-bold">PoupaFood</div> */}
          <Image
            src={logo.src}
            width={100}
            height={80}
            alt="Logotipo Poupa Food"
          />
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#d76911] transition">
              Sobre
            </a>
            <a href="#solution" className="hover:text-[#d76911] transition">
              Solução
            </a>
            <a href="#contact" className="hover:text-[#d76911] transition">
              Contato
            </a>
          </nav>
          <button className="bg-[#f68824] hover:bg-[#d76911] text-white px-4 py-2 rounded-lg md:hidden">
            Menu
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-lightTeal py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-dark to-green">
            PoupaFood: Valoriza o Seu Negócio, Respeita o Nosso Planeta
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transformamos desperdício em oportunidade para um futuro mais
            sustentável.
          </p>
          <button className="bg-lightOrange hover:bg-darkOrange text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-dark">
              Sobre a PoupaFood
            </h2>
            <p className="text-lg mb-6">
              Nossa missão é transformar desperdício em oportunidade. A
              PoupaFood conecta fabricantes e atacadistas do setor alimentício
              com consumidores conscientes, oferecendo uma solução inteligente
              para o excedente de alimentos.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#0b2621]">
              <li>
                <strong>Sustentabilidade:</strong> Redução do desperdício e da
                pegada ambiental.
              </li>
              <li>
                <strong>Visibilidade:</strong> Destaque para produtos excedentes
                e fortalecimento das marcas parceiras.
              </li>
              <li>
                <strong>Eficiência:</strong> Transformação de perdas em ganhos.
              </li>
              <li>
                <strong>Acessibilidade:</strong> Produtos de qualidade por
                preços mais acessíveis.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-bl from-green to-darkTeal rounded-lg shadow-lg p-8 text-center text-dark">
            <p className="text-xl font-semibold">
              {
                '"Um futuro onde o desperdício não é uma opção, mas uma oportunidade para criar valor e cuidar do planeta."'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 bg-white text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-dark">Nossa Solução</h2>
          <p className="text-xl mb-12 text-dark">
            A PoupaFood conecta estabelecimentos com excedentes de alimentos a
            consumidores conscientes, oferecendo benefícios econômicos, sociais
            e ambientais.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0b2621] rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-[1.02]">
              <Image
                src={img1.src}
                alt="Cadastro dos Parceiros"
                width={400}
                height={64}
                className="mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f68824]">
                  Cadastro dos Parceiros
                </h3>
                <p>
                  Estabelecimentos listam seus excedentes diretamente no app.
                </p>
              </div>
            </div>
            <div className="bg-[#0b2621] rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-[1.02]">
              <Image
                src={img2.src}
                alt="Ofertas Visíveis"
                width={400}
                height={64}
                className="mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f68824]">
                  Ofertas Visíveis
                </h3>
                <p>Produtos excedentes são oferecidos a preços reduzidos.</p>
              </div>
            </div>
            <div className="bg-[#0b2621] rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-[1.02]">
              <Image
                src={img3.src}
                alt="Compra e Retirada"
                width={400}
                height={64}
                className="mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f68824]">
                  Compra e Retirada
                </h3>
                <p>
                  O consumidor adquire o produto pelo app e retira no local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b2621] text-[#99baa4] py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 PoupaFood. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

// import React from "react";
// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
// import Solution from "@/components/Solution";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <About />
//       <Solution />
//       <Contact />
//     </div>
//   );
// }
