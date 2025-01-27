import Image from "next/image";

export default function Navbar({ logo }) {
  return (
    <nav className="bg-white text-black px-6 py-2 top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
        </nav>
        {/* <button className="bg-[#f68824] hover:bg-[#d76911] text-white px-4 py-2 rounded-lg md:hidden">
          Menu
        </button> */}
      </div>
    </nav>
  );
}
