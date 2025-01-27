import React from "react";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solution from "@/components/Solution";

export default function HomePage() {
  return (
    <div className="bg-white text-dark">
      <Hero />
      <About />
      <Solution img1={img1} img2={img2} img3={img3} />
    </div>
  );
}
