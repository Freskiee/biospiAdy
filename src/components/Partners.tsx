
import React from "react";
import Container from "./layout/Container";

const PARTNERS = [
  { name: "Clínica VetMimos", logo: "https://placehold.co/90x40?text=VetMimos" },
  { name: "Mascotas Felices", logo: "https://placehold.co/90x40?text=Mascotas+" },
  { name: "Amigos Veterinaria", logo: "https://placehold.co/90x40?text=AmigosVet" },
];

const TESTIMONIALS = [
  {
    name: "María G.",
    text:
      "Gracias por el trato tan humano y cálido; hicieron menos dolorosa la despedida de mi perrito.",
  },
  {
    name: "Clínica VetMimos",
    text:
      "Biospi es nuestro aliado desde hace años, siempre responsables y atentos con todos nuestros clientes.",
  },
];

const Partners = () => (
  <section className="py-12 md:py-16 bg-white" id="socios">
    <Container>
      <h2 className="text-3xl font-heading font-bold text-primary text-center mb-6 animate-fade-in-up">
        Nuestros Socios Comerciales
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 mb-7">
        {PARTNERS.map((p, i) => (
          <div key={p.name} className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${i*100+100}ms` }}>
            <img src={p.logo} alt={p.name} className="h-10 w-auto rounded bg-muted shadow" />
            <span className="text-muted-foreground font-medium">{p.name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 justify-center">
        {TESTIMONIALS.map((t, i) => (
          <blockquote
            key={t.name}
            className="bg-secondary rounded-lg shadow p-6 max-w-md mx-auto animate-fade-in-up"
            style={{ animationDelay: `${i*120+220}ms` }}
          >
            <span className="text-primary font-semibold text-base">"{t.text}"</span>
            <footer className="mt-2 text-sm text-muted-foreground">&mdash; {t.name}</footer>
          </blockquote>
        ))}
      </div>
      <div className="mt-9 flex justify-center">
        <a
          href="#contacto"
          className="bg-primary text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-primary/95 transition text-lg"
        >
          ¿Eres veterinaria? Sé nuestro socio
        </a>
      </div>
    </Container>
  </section>
);

export default Partners;
