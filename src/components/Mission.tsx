
import React from "react";
import Container from "./layout/Container";

const Mission = () => (
  <section className="bg-white py-12 md:py-16" id="mision">
    <Container className="text-center">
      <h2 className="text-3xl font-heading text-primary font-bold mb-4 animate-fade-in-up">
        Nuestra Misión
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up">
        Brindar un acompañamiento empático y profesional para despedirse de quienes nos dieron amor incondicional.
        Ofrecemos servicios de cremación de mascotas que respetan los valores de
        <span className="text-primary font-bold"> dignidad, cariño y cercanía</span>, asegurando una transición tranquila en un entorno cálido y humano.
      </p>
    </Container>
  </section>
);

export default Mission;
