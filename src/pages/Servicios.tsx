import React from "react";
import { CheckCircle, Truck, PawPrint, Tag, Store, Medal, Landmark, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

const serviciosPrincipales = [
  "Recuperación de cenizas",
  "Urna de MDF. Diseño exclusivo de Biospi",
  "Placa grabada con el nombre de la mascota (varios modelos y estilos tipográficos)",
  "Certificado de cremación",
  "Nota: El costo depende del peso de la mascota"
];

const serviciosAdicionales = [
  {
    icon: <Truck className="text-primary w-7 h-7" />,
    title: "Servicio de transporte",
    desc: (
      <>
        Podemos ir por tu mascota a tu domicilio o clínica veterinaria.<br/>
        <span className="text-gray-500 text-sm">Este servicio tiene un costo adicional según la distancia.<br/>Disponible solo en CDMX y Área Metropolitana.</span>
      </>
    )
  },
  {
    icon: <Tag className="text-primary w-7 h-7" />,
    title: "Plan de previsión",
    desc: (
      <>
        No tomes una decisión apresurada en un momento difícil.<br/>
        Contrata con anticipación y paga a meses sin intereses o en pagos quincenales/mensuales.
        <ul className="list-disc pl-4 mt-2 text-base space-y-1 text-gray-700">
          <li>Transferible a cualquier mascota</li>
          <li>Pagos a 6, 9 o 12 meses sin intereses</li>
          <li>Sin penalizaciones por pago anticipado</li>
          <li>Sin vigencia</li>
        </ul>
      </>
    )
  }
];

const extras = [
  { icon: <PawPrint className="w-5 h-5 text-secondary" />, text: "Hospedaje para mascotas (resort canino)" },
  { icon: <Smile className="w-5 h-5 text-secondary" />, text: "Estética y spa" },
  { icon: <Store className="w-5 h-5 text-secondary" />, text: "Venta de accesorios" },
  { icon: <Landmark className="w-5 h-5 text-secondary" />, text: "Venta de alimentos" },
  { icon: <Medal className="w-5 h-5 text-secondary" />, text: "Entrenamiento canino" },
  { icon: <CheckCircle className="w-5 h-5 text-secondary" />, text: "Otros servicios relacionados" }
];

const Servicios = () => (
  <main className="w-full font-sans bg-secondary/10">
    {/* Hero servicios */}
    <section className="w-full relative min-h-[230px] flex items-center justify-center bg-white overflow-hidden">
      <img
        src="/assets/imagen-inicio.png"
        alt="Servicios de cremación Biospi"
        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-40 pointer-events-none"
      />
      <Container className="relative z-10 py-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-primary text-center drop-shadow">
          Servicio de cremación para mascotas
        </h1>
        <p className="text-lg font-medium text-gray-700/90 text-center max-w-xl mx-auto">
          Tranquilidad y acompañamiento en cada etapa. Cuidamos cada detalle para que el último adiós sea digno y lleno de amor.
        </p>
      </Container>
    </section>

    {/* Servicio principal */}
    <section className="py-12 md:py-16 bg-secondary/40">
      <Container>
        <div className="bg-white/95 rounded-xl p-7 shadow-lg max-w-3xl mx-auto mb-6 animate-fade-in-up">
          <h2 className="text-2xl font-bold font-heading text-primary mb-3">¿Qué incluye?</h2>
          <ul className="space-y-3">
            {serviciosPrincipales.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-base md:text-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8">
          {serviciosAdicionales.map(({icon, title, desc}, i) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow animate-fade-in-up flex flex-col gap-2">
              <div className="mb-1">{icon}</div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">{title}</h3>
              <div className="text-gray-700 text-base">{desc}</div>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="bg-secondary/40 rounded-xl p-6 shadow mb-8 animate-fade-in-up">
          <h3 className="font-heading mb-2 text-primary font-bold text-lg">Para tu tranquilidad… BIOSPI también es:</h3>
          <ul className="space-y-1 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
            {extras.map(({icon, text}, i) => (
              <li key={text} className="flex gap-2 items-center text-gray-700 text-base">
                {icon} {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Botón WhatsApp */}
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/525571076771?text=Hola%2C%20recientemente%20perd%C3%AD%20a%20mi%20mascota%20y%20me%20siento%20muy%20triste.%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20BIOSPI%20puede%20apoyarme%20para%20darle%20una%20despedida%20digna%20y%20amorosa.%20Gracias%20por%20estar%20ah%C3%AD%20en%20estos%20momentos%20tan%20dif%C3%ADciles."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary/90 text-xl transition-all animate-fade-in-up"
          >
            <svg width={27} height={27} fill="none" viewBox="0 0 256 256">
              <path fill="white" d="M128 20a108 108 0 1 0 0 216c1.6 0 3.2 0 4.8-.1H128a107.71 107.71 0 0 0 52.4-14.4l35.3 9.2a16 16 0 0 0 19.1-19.1l-9.2-35.3A108 108 0 0 0 128 20ZM42.2 196.6l6.2-23.7a28 28 0 0 1 13.8-17.7L64.7 175A92 92 0 1 1 175 64.7l-19.3 2.5a28 28 0 0 1-17.7 13.8l-23.7 6.2A92.43 92.43 0 0 1 42.2 196.6Zm176.3-18.7c-13 13-28.3 22.9-45.2 28.6l9.3-35.7a44 44 0 0 1 1.6-11.7l36.8 10.5c1.8.5 3.6 1.6 4.9 2.9a8.06 8.06 0 0 1 2.9 4.9Z"/>
            </svg>
            Solicita más información por WhatsApp
          </a>
        </div>
      </Container>
    </section>
  </main>
);

export default Servicios;
