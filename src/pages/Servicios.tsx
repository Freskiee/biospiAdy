import React from "react";
import { CheckCircle, Truck, PawPrint, Tag, Store, Medal, Landmark, Smile, MessageCircle } from "lucide-react";
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
  { icon: <PawPrint className="w-5 h-5 text-primary" />, text: "Hospedaje para mascotas (resort canino)" },
  { icon: <Smile className="w-5 h-5 text-primary" />, text: "Estética y spa" },
  { icon: <Store className="w-5 h-5 text-primary" />, text: "Venta de accesorios" },
  { icon: <Landmark className="w-5 h-5 text-primary" />, text: "Venta de alimentos" },
  { icon: <Medal className="w-5 h-5 text-primary" />, text: "Entrenamiento canino" },
  { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Otros servicios relacionados" }
];

const Servicios = () => (
  <main className="w-full font-sans bg-secondary/10">
    {/* Hero servicios */}
    <section className="w-full relative min-h-[300px] flex items-center justify-center bg-white overflow-hidden rounded-lg">
      <img
        src="/home-hero-free.webp"
        alt="Servicios de cremación Biospi"
        className="absolute top-0 left-0 w-full h-full object-cover object-center pointer-events-none rounded-lg"
        style={{ imageRendering: 'auto' }}
      />
      <Container className="relative z-10 py-10 flex flex-col items-start pl-32">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-2 text-primary drop-shadow-lg">
          Servicio de cremación para mascotas
        </h1>
        <p className="text-xl font-medium text-white/90 max-w-xl">
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
          <h3 className="font-heading mb-2 text-gray-800 font-bold text-2xl">
            Para tu tranquilidad… BIOSPI también es:
          </h3>
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
            href="https://wa.me/525571076771?text=Hola%2C%20estoy%20viendo%20la%20secci%C3%B3n%20de%20servicios%20en%20su%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20lo%20que%20ofrecen%20en%20BIOSPI.%20Quiero%20entender%20mejor%20c%C3%B3mo%20funcionan%20y%20c%C3%B3mo%20puedo%20contratarlos.%20Muchas%20gracias."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary/90 text-xl transition-all animate-fade-in-up"
          >
            <MessageCircle size={25} className="text-white" />
            Solicitar detalles de los servicios
          </a>
        </div>
      </Container>
    </section>
  </main>
);

export default Servicios
