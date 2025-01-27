import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Oops! | PoupaFood",
  description: "Página não encontrada",
};

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-white text-dark flex flex-col gap-4 items-center justify-center">
      <div className="text-[40px] font-bold">Página não encontrada!</div>
      <div className="text-[30px] font-bold text-center">
        Mas não se preocupe, retorne para nossa página inicial &#129321;
      </div>
      <Link
        href="/"
        className="bg-lightOrange text-white hover:bg-darkOrange transition duration-300 text-[20px] font-bold px-10 py-2 rounded-lg mt-10"
      >
        Retornar para página inicial
      </Link>
    </div>
  );
}
