"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Leaf } from "lucide-react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-10 flex flex-col items-center justify-center gap-8 bg-darkTeal px-4 md:px-8"
    >
      <Leaf
        className="w-20 h-20 text-orange"
        data-aos="fade-down"
        data-aos-delay="200"
      />
      <div
        className="flex flex-row items-center gap-3"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-dark text-center">
          Sobre a
        </h2>
        <div className="text-4xl md:text-6xl font-bold flex flex-row items-center">
          <h2 className="text-dark drop-shadow-2xl">Poupa</h2>
          <h2 className="text-green drop-shadow-lg">Food</h2>
        </div>
      </div>
      <p
        className="mt-6 text-gray-800 max-w-3xl mx-auto text-center text-2xl font-medium"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Nossa missão é transformar desperdício em oportunidade. A PoupaFood
        conecta fabricantes e atacadistas do setor alimentício com consumidores
        conscientes, oferecendo uma solução inteligente para o excedente de
        alimentos.
      </p>
      <ul
        className="mt-6 space-y-4 max-w-xl mx-auto text-center text-xl"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <li className="text-gray-800">
          <strong>Sustentabilidade:</strong> Contribuímos para a redução do
          desperdício e da pegada ambiental.
        </li>
        <li className="text-gray-800">
          <strong>Visibilidade:</strong> Damos destaque aos produtos excedentes
          e fortalecemos a reputação das marcas parceiras.
        </li>
        <li className="text-gray-800">
          <strong>Eficiência:</strong> Desbloqueamos o valor do inventário
          excedente, transformando perdas em ganhos.
        </li>
        <li className="text-gray-800">
          <strong>Acessibilidade:</strong> Consumidores têm acesso a produtos de
          qualidade por preços mais acessíveis.
        </li>
      </ul>
    </section>
  );
}
