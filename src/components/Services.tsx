
import React from "react";
import Container from "./layout/Container";
import { Users, Home, MapPin, Mail, ArrowUp, ArrowDown } from "lucide-react";

const SERVICES = [
  {
    title: "Cremación Individual",
    desc: "Máximo respeto y dignidad, entregamos solo las cenizas de tu mascota.",
    icon: <Users className="text-primary w-8 h-8" />,
  },
  {
    title: "Cremación Comunitaria",
    desc: "Opción compartida, no se devuelve cenizas, ecológica y preventiva.",
    icon: <Home className="text-primary w-8 h-8" />,
  },
  {
    title: "Entrega de cenizas",
    desc: "Urna personalizada entregada en forma rápida y segura.",
    icon: <ArrowDown className="text-primary w-8 h-8" />,
  },
  {
    title: "Recogida a domicilio",
    desc: "Vamos a tu hogar o veterinaria aliada a retirar el cuerpo.",
    icon: <MapPin className="text-primary w-8 h-8" />,
  },
  {
    title: "Certificado de cremación",
    desc: "Documento oficial que garantiza el proceso realizado.",
    icon: <Mail className="text-primary w-8 h-8" />,
  },
  {
    title: "Cuidado respetuoso",
    desc: "Manejo ético y compasivo durante cada etapa del proceso.",
    icon: <Users className="text-primary w-8 h-8" />,
  }
];

const Services = () => (
  <section className="bg-secondary/70 py-12 md:py-16" id="servicios">
    <Container>
      <h2 className="text-3xl font-heading text-primary font-bold text-center mb-8 animate-fade-in-up">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className="bg-white rounded-xl p-6 min-h-[180px] shadow flex flex-col items-center gap-3 hover:shadow-lg transition animate-fade-in-up"
            style={{ animationDelay: `${i*80}ms` }}
          >
            <div>{s.icon}</div>
            <h3 className="font-heading font-bold text-xl text-gray-800">{s.title}</h3>
            <p className="text-gray-600 text-[1rem] text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
