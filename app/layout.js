import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "PoupaFood",
  description: "PoupaFood: Valoriza o Seu Negócio, Respeita o Nosso Planeta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
