"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Store, Globe, RefreshCw } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../public/logo.png";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Section 1 */}
      <section
        className="bg-gradient-to-t from-lightTeal to-white scroll-section min-h-screen flex flex-col items-center justify-center gap-8 px-4 text-center"
        data-aos="fade-up"
      >
        <div>
          <Image
            src={logo.src}
            width={300}
            height={300}
            alt="Logotipo Poupa Food"
          />
        </div>
        <p
          className="text-xl md:text-2xl text-dark max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Nossa missão é clara: reduzir o desperdício e criar um futuro mais
          sustentável. Estamos transformando o mercado ao conectar negócios com
          soluções inovadoras que valorizam cada recurso.
        </p>
        <p
          className="text-xl md:text-2xl text-dark mt-4 max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Sabemos que pequenas mudanças geram grandes impactos. Com o PoupaFood,
          empresas e consumidores encontram formas práticas de contribuir para
          um planeta melhor.
        </p>
      </section>

      {/* Section 2 */}
      <section
        className="bg-dark scroll-section min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center"
        data-aos="fade-up"
      >
        <Store size={64} className="text-lightOrange" data-aos="zoom-in" />
        <h2
          className="text-4xl md:text-7xl font-bold text-lightOrange mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Valoriza o Seu Negócio
        </h2>
        <p
          className="text-xl md:text-2xl text-white max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          No PoupaFood, acreditamos que cada empresa merece prosperar sem
          desperdício. Conectamos você a parceiros estratégicos e soluções que
          reduzem custos e aumentam a eficiência.
        </p>
        <p
          className="text-xl md:text-2xl text-white mt-4 max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Seja na gestão de estoques, reaproveitamento de alimentos ou novas
          estratégias de mercado, estamos ao seu lado para transformar desafios
          em oportunidades reais de crescimento.
        </p>
      </section>

      {/* Section 3 */}
      <section
        className="scroll-section min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center bg-green"
        data-aos="fade-up"
      >
        <Globe size={64} className="text-dark" data-aos="zoom-in" />
        <h2
          className="text-4xl md:text-7xl font-bold text-dark mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Respeita o Nosso Planeta
        </h2>
        <p
          className="text-xl md:text-2xl text-dark max-w-4xl font-medium"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Cada passo em direção à sustentabilidade importa. No PoupaFood,
          promovemos a redução do desperdício para preservar os recursos
          naturais e proteger o meio ambiente.
        </p>
        <p
          className="text-xl md:text-2xl text-dark mt-4 max-w-4xl font-medium"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Trabalhamos para criar um impacto positivo no planeta, incentivando
          práticas que geram benefícios para as pessoas e para o ecossistema.
        </p>
      </section>

      {/* Section 4 */}
      <section
        className="scroll-section min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center"
        data-aos="fade-up"
      >
        <RefreshCw size={64} className="text-dark" data-aos="zoom-in" />
        <h2
          className="text-4xl md:text-7xl font-bold text-dark mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Transformamos Desperdício em Oportunidade
        </h2>
        <p
          className="text-xl md:text-2xl text-gray-600 max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Nada se perde, tudo se transforma. Essa é a essência do PoupaFood.
          Oferecemos ferramentas para que empresas possam reaproveitar o que
          antes era descartado.
        </p>
        <p
          className="text-xl md:text-2xl text-gray-600 mt-4 max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Desde soluções para redistribuir alimentos a iniciativas criativas que
          geram renda extra, estamos comprometidos em maximizar o potencial de
          cada recurso.
        </p>
      </section>
    </div>
  );
}
