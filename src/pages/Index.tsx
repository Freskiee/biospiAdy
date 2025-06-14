
// Landing principal de Biospi

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Urns from "@/components/Urns";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-secondary font-sans min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Partners />
        <Urns />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm bg-white/70 border-t font-sans">
        &copy; {new Date().getFullYear()} Biospi. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Index;
