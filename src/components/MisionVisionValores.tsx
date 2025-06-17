import React from "react";
import Container from "./layout/Container";
import { HeartHandshake, Eye, Gem, Leaf, Thermometer, Smile, Link } from "lucide-react";

const valores = [
  { label: "Compromiso", icon: <Thermometer className="w-5 h-5 text-[#30C7B5]" /> },
  { label: "Eficiencia", icon: <Smile className="w-5 h-5 text-[#30C7B5]" /> },
  { label: "Efectividad", icon: <Gem className="w-5 h-5 text-[#30C7B5]" /> },
  { label: "Empatía", icon: <HeartHandshake className="w-5 h-5 text-[#30C7B5]" /> },
  { label: "Simplicidad", icon: <Leaf className="w-5 h-5 text-[#30C7B5]" /> },
  { label: "Calidez", icon: <Smile className="w-5 h-5 text-[#30C7B5]" /> },
  { label: "Conexión con la naturaleza", icon: <Link className="w-5 h-5 text-[#30C7B5]" /> },
];

const blocks = [
  {
    title: "MISIÓN",
    color: "#30C7B5",
    text: "BIOSPI tiene un claro enfoque al trato digno, respetuoso y amoroso que debe recibir tu pequeño compañero, ofreciendo productos y servicios de excelente calidad.",
    icon: <HeartHandshake className="w-10 h-10 text-[#30C7B5]" />,
  },
  {
    title: "VISIÓN",
    color: "#B1E5F4",
    text: (
      <>
        ¡Diversificación en nuestros servicios! BIOSPI también es un espacio en el cual encontrarás hospedaje para tus compañeritos de vida en nuestro Resort Canino, servicio de estética, spa, venta de accesorios, alimentos, área de entrenamiento canino y muchas cosas más.
        <br />
        <span className="italic text-xs text-gray-500 block mt-2">
          "En BIOSPI trabajamos en brindar un servicio de excelencia y mejorar cada día"
        </span>
      </>
    ),
    icon: <Eye className="w-10 h-10 text-[#B1E5F4]" />,
  },
  {
    title: "VALORES",
    color: "#D0ECE7",
    icon: <Gem className="w-10 h-10 text-[#30C7B5]" />,
    content: (
      <ul className="grid gap-2 mt-3 mx-auto max-w-xs">
        {valores.map(({ label, icon }) => (
          <li key={label} className="flex items-center gap-3 bg-[#F3F8FC] rounded-xl px-3 py-2 shadow-sm border-l-4 border-[#30C7B5]/40 valor-bar">
            {icon}
            <span className="font-semibold text-base text-gray-700">{label}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

const MisionVisionValores = () => (
  <section className="w-full py-14 md:py-18 bg-[#E9F6F6]">
    <Container>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary text-center mb-10 animate-fade-in-up">
        Misión, Visión y Valores
      </h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="flex-1 bg-white p-7 shadow-lg animate-fade-in-up transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl rounded-3xl"
            style={{ minHeight: '300px', borderColor: block.color }}
          >
            <div className="flex justify-center mb-3">{block.icon}</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: block.color }}>{block.title}</h3>
            {block.text ? (
              <p className="text-gray-700 font-medium">{block.text}</p>
            ) : (
              <div className="text-gray-700 font-medium">{block.content}</div>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default MisionVisionValores;

<style jsx>{`
  .valor-bar {
    position: relative;
    overflow: hidden;
    background-color: #f3f8fc;
    border-radius: 0.5rem;
  }
  .valor-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #30c7b5;
    transition: width 2s ease-in-out;
  }
  .valor-bar:hover::after {
    width: 100%;
  }
`}</style>
