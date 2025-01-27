import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import logo from "../public/logo.png";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import ogImage from "../public/og.png";

export async function generateMetadata() {
  return {
    title: "PoupaFood",
    description: "Valoriza o Seu Negócio, Respeita o Nosso Planeta.",
    alternates: {
      canonical: process.env.SITE_URL,
    },
    metadataBase: new URL(process.env.SITE_URL),
    openGraph: {
      title: "PoupaFood",
      description: "Valoriza o Seu Negócio, Respeita o Nosso Planeta.",
      url: process.env.SITE_URL,
      siteName: "PoupaFood",
      images: ogImage.src,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} antialiased`}>
        <Navbar className="navbar" logo={logo} />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
