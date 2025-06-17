import React from "react";
import Container from "./layout/Container";
import { MessageCircle } from "lucide-react";

const SolicitaInformacion = () => (
  <section className="w-full py-12 bg-white/80">
    <Container>
      <div className="max-w-2xl mx-auto rounded-3xl border-2 border-[#B1E5F4] shadow-xl p-8 text-center animate-fade-in-up bg-[#F3F8FC]">
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">Solicita información</h2>
        <p className="text-gray-600 font-medium mb-3">
          ¿Aún tienes dudas? Solicita la información que necesites.<br />
          Recuerda que tenemos servicio las 24 horas del día, los 365 días del año.
        </p>
        <a
          href="https://wa.me/525571076771?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20que%20ofrece%20BIOSPI.%20Estoy%20buscando%20opciones%20para%20asegurar%20una%20despedida%20digna%20y%20amorosa%20para%20mi%20mascota%2C%20y%20quisiera%20saber%20c%C3%B3mo%20funcionan%20sus%20servicios.%20Gracias%20por%20su%20atenci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold text-lg border-2 border-[#30C7B5] bg-[#30C7B5]/10 text-[#30C7B5] hover:bg-[#30C7B5] hover:text-white transition-all shadow pulse"
        >
          <MessageCircle size={25} className="text-[#30C7B5]" />
          Más información
        </a>
        <a
          href="https://wa.me/525571076771?text=Hola%2C%20necesito%20atenci%C3%B3n%20urgente.%20Acabo%20de%20perder%20a%20mi%20mascota%20y%20estoy%20buscando%20ayuda%20para%20darle%20una%20despedida%20digna%20y%20respetuosa.%20Me%20dijeron%20que%20BIOSPI%20puede%20acompa%C3%B1arme%20en%20este%20momento%20tan%20dif%C3%ADcil.%20Agradezco%20mucho%20su%20apoyo."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3 mt-4 rounded-full font-bold text-lg border-2 border-red-500 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow pulse"
        >
          <MessageCircle size={25} className="text-red-500" />
          ATENCIÓN URGENTE
        </a>
      </div>
    </Container>
  </section>
);

export default SolicitaInformacion;
