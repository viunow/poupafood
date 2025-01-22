import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-darkTeal text-white py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="text-lg font-bold">
        <Link href="/">PoupaFood</Link>
      </div>
      <ul className="hidden md:flex space-x-6 text-sm">
        <li>
          <Link href="#about">Sobre</Link>
        </li>
        <li>
          <Link href="#solution">Solução</Link>
        </li>
        <li>
          <Link href="#contact">Contato</Link>
        </li>
      </ul>
      <button className="block md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
}
