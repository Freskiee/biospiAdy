import React, { useRef, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "./ui/carousel";

type Urn = {
  name: string;
  images: string[];
};

interface UrnCarouselProps {
  urns: Urn[];
  onSelectUrn: (idx: number) => void;
  setApi: (api: CarouselApi) => void;
}

const AUTO_SCROLL_INTERVAL = 2700; // ms de espera para siguiente slide
const DELAY_AFTER_INTERACTION = 2800; // ms tras interacción antes de retomar autoplay

const UrnCarousel: React.FC<UrnCarouselProps> = ({ urns, onSelectUrn, setApi }) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastUserAction = useRef<number>(Date.now());

  // Arranca/stopea el autoplay (slide-a-slide)
  useEffect(() => {
    if (!carouselApi || urns.length < 2) return;

    function play() {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = setInterval(() => {
        // Si el usuario interactuó recientemente, esperamos.
        if (Date.now() - lastUserAction.current < DELAY_AFTER_INTERACTION) return;
        if (!carouselApi) return;

        carouselApi.scrollNext();
      }, AUTO_SCROLL_INTERVAL);
    }

    play();

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [carouselApi, urns.length]);

  // Detiene y retoma autoplay tras cualquier interacción
  function handleUserAction(action?: () => void) {
    lastUserAction.current = Date.now();
    // Reinicia el autoplay con delay
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);

    if (action) action();
    // Retoma autoplay después del delay
    delayTimeoutRef.current = setTimeout(() => {
      if (carouselApi && urns.length > 1) {
        autoplayTimerRef.current = setInterval(() => {
          if (Date.now() - lastUserAction.current < DELAY_AFTER_INTERACTION) return;
          carouselApi.scrollNext();
        }, AUTO_SCROLL_INTERVAL);
      }
    }, DELAY_AFTER_INTERACTION);
  }

  // Arrows: avanza slide-a-slide
  const handleArrow = (dir: "prev" | "next") => {
    if (!carouselApi) return;
    handleUserAction(() => {
      if (dir === "prev") carouselApi.scrollPrev();
      else carouselApi.scrollNext();
    });
  };

  // Sync después de drag manual
  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => {
      // Lo importante es registrar la acción del usuario
      lastUserAction.current = Date.now();
    };
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  // Limpia todos los timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (carouselApi) {
      setApi(carouselApi);
    }
  }, [carouselApi, setApi]);

  return (
    <div className="relative">
      <Carousel opts={{ loop: true, align: "start" }} setApi={setCarouselApi}>
        <CarouselContent className="flex gap-0 transition-none">
          {urns.map((u, i) => (
            <CarouselItem
              key={u.name}
              className="p-0 m-0 flex-shrink-0 flex-grow-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 cursor-pointer"
              onClick={() => onSelectUrn(i)}
              tabIndex={0}
              aria-label={`Ver detalles de ${u.name}`}
            >
              <div
                className="w-full h-52 sm:h-64 md:h-72 lg:h-80 rounded-none overflow-hidden border-0 group relative"
                style={{
                  minWidth: 0,
                  boxShadow: "none",
                  border: "none",
                }}
              >
                <img
                  src={u.images[0]}
                  alt={u.name}
                  className="w-full h-full object-cover group-hover:scale-[1.017] transition-transform duration-\[1700ms\] ease-linear"
                  draggable={false}
                  style={{
                    minWidth: "100%",
                    cursor: "pointer",
                    display: "block",
                    border: "none",
                    boxShadow: "none",
                    transition: "transform 1.7s linear",
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Flechas personalizadas */}
        <button
          type="button"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full shadow border border-gray-200 hover:bg-primary/20 transition"
          style={{ width: 38, height: 38 }}
          aria-label="Anterior"
          onClick={() => handleArrow("prev")}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#179E9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full shadow border border-gray-200 hover:bg-primary/20 transition"
          style={{ width: 38, height: 38 }}
          aria-label="Siguiente"
          onClick={() => handleArrow("next")}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="#179E9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </Carousel>
    </div>
  );
};

export default UrnCarousel;
