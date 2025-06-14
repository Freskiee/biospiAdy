
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
          href="https://wa.me/525571076771"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold text-lg border-2 border-[#30C7B5] bg-[#30C7B5]/10 text-[#30C7B5] hover:bg-[#30C7B5] hover:text-white transition-all shadow pulse"
        >
          <MessageCircle size={25} className="text-[#30C7B5]" />
          Enviar mensaje por WhatsApp
        </a>
      </div>
    </Container>
  </section>
);

export default SolicitaInformacion;
