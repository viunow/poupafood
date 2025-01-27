import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solution from "@/components/Solution";

export default function HomePage() {
  return (
    <div className="bg-white text-dark">
      <Hero />
      <About />
      <Solution />
    </div>
  );
}
