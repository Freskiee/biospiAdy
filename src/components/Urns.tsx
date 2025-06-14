import React, { useState, useRef, useEffect } from "react";
import Container from "./layout/Container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "./ui/carousel";
import { Circle, Image as ImageIcon, RotateCcw } from "lucide-react";
import UrnCarousel from "./UrnCarousel";

// Estructura de imágenes (puedes cambiar las urls para mejor visual o más variedad)
const URNS = [
  {
    name: "Urna Biospi",
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    ],
    desc:
      "Diseño elegante exclusivo de BIOSPI. Acabados de alta calidad, para un recuerdo eterno.",
    price: 25000,
  },
  {
    name: "Urna Amor Tattoo",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    ],
    desc:
      "Moderna, con detalles inspirados en el amor incondicional hacia tu mascota.",
    price: 25000,
  },
  {
    name: "Urna Esfera",
    images: [
      "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=800&q=80",
    ],
    desc:
      "Forma esférica y armónica. Un homenaje minimalista y contemporáneo.",
    price: 28000,
  },
  {
    name: "Urna Esponjoso",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    ],
    desc:
      "Pensada para recordar la calidez y la ternura de quienes dejan una huella suave en la vida.",
    price: 23000,
  },
  {
    name: "Urna Carmen",
    images: [
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80",
    ],
    desc:
      "Urna personalizada con nombre y fecha, ideal para homenajes únicos y sentidos.",
    price: 31000,
  },
  {
    name: "Urna Wood",
    images: [
      "https://images.unsplash.com/photo-1519121780667-14a173b1ae9b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519121780667-14a173b1ae9b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519121780667-14a173b1ae9b?auto=format&fit=crop&w=800&q=80",
    ],
    desc:
      "Confeccionada en madera seleccionada, integra naturaleza y elegancia en un mismo diseño.",
    price: 26000,
  },
  {
    name: "Urna Naturaleza",
    images: [
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=800&q=80",
    ],
    desc:
      "Materiales ecológicos y biodegradables para una despedida amigable con el entorno.",
    price: 21500,
  },
];

// Aux: para limitar texto
const truncate = (str: string, n = 58) =>
  str.length > n ? str.slice(0, n) + "..." : str;

const Urns = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Para controlar tap en mobile y mostrar el nombre en el card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  return (
    <main className="bg-secondary/10 min-h-screen flex flex-col">
      {/* Carrusel TOP modularizado */}
      <section className="w-full relative bg-white shadow-sm overflow-x-hidden py-8">
        <Container>
          <UrnCarousel urns={URNS} onSelectUrn={setOpenIndex} />
        </Container>
      </section>
      {/* Intro */}
      <section className="py-7 bg-white/90 shadow-sm -mt-2">
        <Container>
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-xl md:text-2xl text-gray-700 font-bold mb-2">
              Urnas personalizadas para homenajear a quienes nos dejan amor eterno.
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Fabricadas con materiales de alta calidad y diseños exclusivos de <b>Biospi</b>. Cada urna representa memoria, amor y un adiós lleno de dignidad y cariño.
            </p>
          </div>
        </Container>
      </section>
      {/* Galería grid mejorada con hover sutil */}
      <section className="py-10 md:py-14 bg-secondary/40 flex-1">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-8">
            {URNS.map((u, i) => (
              <div
                key={u.name}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow border-0 hover:shadow-lg transition aspect-square bg-white"
                style={{ minHeight: "170px", animationDelay: `${i * 70 + 90}ms` }}
                tabIndex={0}
                onMouseEnter={() => !isTouch && setHoveredCard(i)}
                onMouseLeave={() => !isTouch && setHoveredCard(null)}
                onTouchStart={() => isTouch && setHoveredCard(i)}
                onTouchEnd={() => isTouch && setHoveredCard(null)}
                onClick={() => setOpenIndex(i)}
                aria-label={`Ver detalles de ${u.name}`}
              >
                <img
                  src={u.images[0]}
                  alt={u.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  draggable={false}
                  style={{
                    border: "none",
                    boxShadow: "none",
                  }}
                />
                <div className={`
                  absolute inset-0 flex items-center justify-center pointer-events-none
                  transition-all duration-700
                  ${hoveredCard === i ? "bg-black/5 backdrop-blur-[2px]" : "bg-transparent"}
                `}
                style={{ transition: "background 0.7s, backdrop-filter 0.7s" }}>
                  <span
                    className={`
                      px-5 py-2 rounded-lg text-white text-xl md:text-2xl font-heading font-light
                      transition-all duration-700 opacity-0 scale-95 blur-sm pointer-events-none
                      drop-shadow-md
                      ${hoveredCard === i ? "opacity-95 scale-100 blur-0 pointer-events-auto" : ""}
                    `}
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      letterSpacing: "0.01em",
                      fontWeight: 400,
                      background: "rgba(43,139,141,0.19)",
                      color: "#f9f9f9",
                      boxShadow: "0 2px 16px 0 #30C7B522",
                      filter: hoveredCard === i ? "blur(0)" : "blur(2px)",
                      transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1), filter 0.6s"
                    }}
                  >
                    {u.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* Modal visual urna */}
      <Dialog open={openIndex !== null} onOpenChange={() => setOpenIndex(null)}>
        <DialogContent className="rounded-2xl md:max-w-2xl lg:max-w-3xl p-0 bg-white/95 overflow-hidden animate-fade-in scale-100">
          {openIndex !== null && (
            <div className="flex flex-col md:flex-row md:items-stretch">
              {/* Imagen central tipo 360 */}
              <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-[#B1E5F4]/60 px-5 py-5 rounded-l-2xl relative">
                <div className="relative">
                  <img
                    src={URNS[openIndex].images[0]}
                    alt={`Vista 360 de ${URNS[openIndex].name}`}
                    className="w-52 h-52 object-cover rounded-xl border border-primary/20 shadow-md mx-auto"
                  />
                  {/* Icono 360° simulado */}
                  <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 flex items-center gap-1 bg-white/90 rounded-full px-3 py-1 text-primary font-bold text-xs shadow border border-primary/30">
                    <RotateCcw size={17} className="mr-1" /> Vista 360°
                  </span>
                </div>
                {/* Carrusel secundario debajo si hay más imágenes */}
                {URNS[openIndex].images.length > 1 && (
                  <div className="w-full mt-6">
                    <Carousel opts={{ loop: true }}>
                      <CarouselContent>
                        {URNS[openIndex].images.map((img, j) => (
                          <CarouselItem key={img + j} className="flex items-center justify-center">
                            <img
                              src={img}
                              alt={`${URNS[openIndex].name} preview ${j + 1}`}
                              className="w-20 h-20 object-cover rounded-lg border border-primary/10 mx-auto"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                )}
              </div>
              {/* Información */}
              <div className="flex-1 p-7 flex flex-col justify-between">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl font-extrabold mb-2 text-primary">
                    {URNS[openIndex].name}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-base text-gray-800 mb-3">{URNS[openIndex].desc}</p>
                <div className="mb-4 mt-3">
                  <span className="text-lg font-bold text-primary">
                    {`$${URNS[openIndex].price.toLocaleString("es-AR")}`}
                  </span>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://wa.me/5491112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-bold shadow hover:bg-[#1ec0ae] transition-all text-lg"
                  >
                    <svg width={22} height={22} fill="none" viewBox="0 0 256 256">
                      <path fill="#fff" d="M128 20a108 108 0 1 0 0 216c1.6 0 3.2 0 4.8-.1H128a107.71 107.71 0 0 0 52.4-14.4l35.3 9.2a16 16 0 0 0 19.1-19.1l-9.2-35.3A108 108 0 0 0 128 20ZM42.2 196.6l6.2-23.7a28 28 0 0 1 13.8-17.7L64.7 175A92 92 0 1 1 175 64.7l-19.3 2.5a28 28 0 0 1-17.7 13.8l-23.7 6.2A92.43 92.43 0 0 1 42.2 196.6Zm176.3-18.7c-13 13-28.3 22.9-45.2 28.6l9.3-35.7a44 44 0 0 1 1.6-11.7l36.8 10.5c1.8.5 3.6 1.6 4.9 2.9a8.06 8.06 0 0 1 2.9 4.9Z"/>
                    </svg>
                    WhatsApp: Solicitar información
                  </a>
                  <DialogClose asChild>
                    <button className="px-5 py-2 rounded-full border border-primary bg-primary/10 text-primary font-bold hover:bg-secondary transition">
                      Cerrar
                    </button>
                  </DialogClose>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {/* Sección Solicita información */}
      <section className="bg-primary/95 py-10">
        <Container>
          <div className="flex flex-col items-center gap-5 animate-fade-in-up">
            <h3 className="text-2xl font-heading font-bold text-white mb-2 text-center">
              Solicita información sobre urnas BIOSPI
            </h3>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-primary font-bold shadow-lg hover:bg-secondary/40 text-lg transition-all hover:scale-105"
            >
              <svg width={25} height={25} fill="none" viewBox="0 0 256 256">
                <path fill="#30C7B5" d="M128 20a108 108 0 1 0 0 216c1.6 0 3.2 0 4.8-.1H128a107.71 107.71 0 0 0 52.4-14.4l35.3 9.2a16 16 0 0 0 19.1-19.1l-9.2-35.3A108 108 0 0 0 128 20ZM42.2 196.6l6.2-23.7a28 28 0 0 1 13.8-17.7L64.7 175A92 92 0 1 1 175 64.7l-19.3 2.5a28 28 0 0 1-17.7 13.8l-23.7 6.2A92.43 92.43 0 0 1 42.2 196.6Zm176.3-18.7c-13 13-28.3 22.9-45.2 28.6l9.3-35.7a44 44 0 0 1 1.6-11.7l36.8 10.5c1.8.5 3.6 1.6 4.9 2.9a8.06 8.06 0 0 1 2.9 4.9Z"/>
              </svg>
              WhatsApp: Solicitar información
            </a>
          </div>
        </Container>
      </section>
      {/* Estilos custom */}
      <style>{`
        .font-heading {
          font-family: "Playfair Display", serif, ui-serif;
        }
        @media (max-width: 600px) {
          .modal-content {
            padding: 1.2rem !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Urns;
