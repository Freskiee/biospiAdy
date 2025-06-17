import React from "react";
import Container from "./layout/Container";
import { PawPrint } from "lucide-react";

const QuienesSomos = () => (
  <section className="w-full py-12 md:py-20 rounded-xl">
    <Container>
      <div className="max-w-3xl mx-auto text-center p-7 rounded-3xl shadow-xl bg-white/95 border-l-4 border-[#30C7B5]/50 animate-fade-in-up">
        <div className="mb-5 flex justify-center">
          <img src="/src/assets/BIOSPI-LOGO-1024x956.webp" alt="Biospi Logo" className="h-16 w-auto" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">¿Quiénes somos?</h2>
        <p className="text-lg text-gray-700 font-medium mb-3">
          En <span className="font-bold text-[#30C7B5]">BIOSPI</span>, somos amantes de todos los animales.
          Los respetamos y les damos un valor mayor al de una simple mascota, ya que forman parte de nuestras vidas, convirtiéndose así en un miembro importante de la familia.
        </p>
        <p className="text-base text-gray-500">
          Ten la seguridad y la confianza de que con nosotros, tu compañero recibirá el trato digno y respetuoso que ese hermoso ser se merece.
        </p>
      </div>
    </Container>
  </section>
);

export default QuienesSomos;
