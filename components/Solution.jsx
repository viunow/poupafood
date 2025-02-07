"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";

export default function Solution() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="solution"
      className="min-h-screen py-20 flex flex-col items-center justify-center gap-8 bg-white text-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-4xl md:text-6xl font-bold mb-6 text-dark"
          data-aos="fade-up"
        >
          Nossa Solução
        </h2>
        <p
          className="text-xl mb-12 text-dark"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          PoupaFood conecta estabelecimentos com excedentes de alimentos a
          consumidores conscientes, oferecendo benefícios econômicos, sociais e
          ambientais.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-[#0b2621] rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-[1.02]"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Image
              src={img1}
              alt="Cadastro dos Parceiros"
              layout="responsive"
              width={400}
              height={300} // Ajuste a proporção das imagens
              className="mx-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#f68824]">
                Cadastro dos Parceiros
              </h3>
              <p>Estabelecimentos listam seus excedentes diretamente no app.</p>
            </div>
          </div>
          <div
            className="bg-[#0b2621] rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-[1.02]"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <Image
              src={img2}
              alt="Ofertas Visíveis"
              layout="responsive"
              width={400}
              height={300} // Ajuste a proporção das imagens
              className="mx-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#f68824]">
                Ofertas Visíveis
              </h3>
              <p>Produtos excedentes são oferecidos a preços reduzidos.</p>
            </div>
          </div>
          <div
            className="bg-[#0b2621] rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-[1.02]"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <Image
              src={img3}
              alt="Compra e Retirada"
              layout="responsive"
              width={400}
              height={300} // Ajuste a proporção das imagens
              className="mx-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#f68824]">
                Compra e Retirada
              </h3>
              <p>O consumidor adquire o produto pelo app e retira no local.</p>
            </div>
          </div>
        </div>
        <blockquote
          className="w-full py-28 lg:py-36 text-center text-4xl lg:text-5xl font-bold text-dark px-8 lg:px-20"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          “Um futuro onde o desperdício não é uma opção, mas uma oportunidade
          para criar valor e cuidar do planeta.”
        </blockquote>
      </div>
    </section>
  );
}
