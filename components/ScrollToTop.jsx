"use client";

import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={scrollToTop}
        className="p-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="w-6 h-6 text-white" />
      </button>
    </motion.div>
  );
}
