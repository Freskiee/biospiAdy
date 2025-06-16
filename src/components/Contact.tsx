import React, { useState } from "react";
import Container from "./layout/Container";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Phone, MapPin } from "lucide-react";

// Paleta y estilos de acento minimalista
const BG_SOFT = "bg-[#F6F8FA]";
const CARD_SOFT = "bg-white/90 border border-[#ECF0F3] shadow-[0_3px_15px_rgba(80,90,120,0.06)]";
const ACCENT_BEIGE = "#F8F9FB";
const BORDER_MINT = "#30C7B5";
const BRAND_SECONDARY = "#B1E5F4";

const mascotaTipos = [
  "Perro", "Gato", "Ave", "Conejo", "Reptil", "Otro"
];
const municipiosCDMX = [
  "Cuauhtémoc","Benito Juárez","Miguel Hidalgo","Iztapalapa",
  "Coyoacán","Azcapotzalco","Gustavo A. Madero","Álvaro Obregón","Venustiano Carranza","Tlalpan","Xochimilco","Milpa Alta","La Magdalena Contreras","Tláhuac","Iztacalco"
];

const handleDummy = (e: React.FormEvent) => {
  e.preventDefault();
  alert("¡Gracias por comunicarte! Pronto te contactaremos.");
};

const Contact = () => {
  const [sending] = useState(false);

  return (
    <section className={`${BG_SOFT} min-h-screen flex flex-col font-sans`}>
      {/* HEADER */}
      <div className="w-full" style={{ background: ACCENT_BEIGE }}>
        <Container>
          <div className="py-14 flex flex-col items-center gap-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-gray-900 tracking-tight [word-spacing:.12em]">
              Contáctanos
              <span className="inline-block w-12 border-b-4 align-bottom border-primary ml-3" />
            </h2>
            <div className="max-w-2xl mx-auto text-center text-lg md:text-xl text-gray-700 font-medium px-2 leading-relaxed tracking-wide space-y-2">
              <p className="mb-1">
                <span className="text-gray-950 font-semibold">Servicio 24/7</span> los <span className="font-semibold">365 días</span> del año.
              </p>
              <p className="italic text-gray-500">Acompañamos a nuestros clientes y sus seres amados en todo momento.</p>
            </div>
          </div>
        </Container>
      </div>

      {/* CONTACT + FORM */}
      <Container className="flex-1 py-10 flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Columna IZQUIERDA - Contacto directo + card de atención personalizada */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          {/* Contacto directo */}
          <div
            className="w-full rounded-2xl p-0 bg-white/95 border border-[#E2EAF2] shadow-[0_2px_10px_rgba(48,199,181,0.07)] flex flex-col justify-between items-center relative overflow-hidden min-h-[370px] md:max-w-md"
            style={{
              minWidth: 290,
              alignSelf: "stretch",
              height: "100%"
            }}
          >
            <div className="flex flex-col gap-3 items-center justify-center flex-1 py-7 px-5 w-full">
              <div
                className="rounded-full bg-white border-2 flex items-center justify-center"
                style={{ borderColor: BRAND_SECONDARY, width: 58, height: 58 }}
              >
                <Phone className="text-primary" size={26} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-1 text-center">
                CONTRATA
              </h3>
              <a
                href="tel:5571076771"
                className="flex items-center gap-3 text-2xl font-heading font-bold text-gray-800 hover:text-primary transition"
              >
                <Phone className="text-primary/90" size={20} />
                55 7107 6771
              </a>
              <div className="flex items-center gap-2 text-gray-600 mt-2 text-base font-medium text-center">
                <MapPin className="text-primary/60" size={18}/>
                <span className="leading-snug">
                  Franz Schubert 188, Peralvillo, Cuauhtémoc,<br className="hidden sm:block"/>
                  CDMX 06220
                </span>
              </div>
              <a
                href="https://wa.me/525571076771?text=Hola%2C%20recientemente%20perd%C3%AD%20a%20mi%20mascota%20y%20me%20siento%20muy%20triste.%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20BIOSPI%20puede%20apoyarme%20para%20darle%20una%20despedida%20digna%20y%20amorosa.%20Gracias%20por%20estar%20ah%C3%AD%20en%20estos%20momentos%20tan%20dif%C3%ADciles."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 text-sm font-semibold border border-primary rounded-full py-2 px-6 hover:bg-primary/10 focus:bg-primary/20 active:bg-primary/20 transition-all"
                title="Escribir por WhatsApp"
                style={{ boxShadow: "0px 2px 8px 0px rgba(48,199,181,0.08)" }}
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path fill="#fff" d="M17.472 14.382c-.297-.149-1.757-.867-2.03-.967-.273-.1-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.205-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.522.074-.795.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.201 5.077 4.358.709.306 1.263.488 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.005-1.413.248-.695.248-1.291.173-1.413-.075-.123-.272-.198-.57-.347z"/>
                  <path fill="#30C7B5" d="M20.52 3.484A11.883 11.883 0 0 0 12.062.001c-3.202 0-6.215 1.25-8.483 3.518C1.255 5.788.006 8.8.006 12c0 2.093.548 4.13 1.594 5.936L.094 23.21a1.077 1.077 0 0 0 1.322 1.321l5.28-1.505A11.885 11.885 0 0 0 12.061 24c3.2 0 6.212-1.25 8.48-3.516a11.892 11.892 0 0 0 3.518-8.484c0-3.2-1.25-6.213-3.518-8.484zm-8.46 18.658c-1.761 0-3.487-.469-4.969-1.354l-.355-.209-3.134.893.894-3.057-.229-.376c-1.053-1.727-1.611-3.726-1.611-5.742 0-5.74 4.676-10.418 10.412-10.418 2.785 0 5.4 1.086 7.372 3.06a10.384 10.384 0 0 1 3.045 7.36c-.002 5.742-4.678 10.419-10.424 10.419z"/>
                </svg>
                <span className="text-primary font-bold">WhatsApp</span>
              </a>
            </div>
            <div className="w-full flex-shrink-0 flex-grow-0 mt-2">
              <div
                className="rounded-2xl shadow-lg border-t border-[#E8EAEF] overflow-hidden w-full flex justify-center items-center bg-white mt-4"
                style={{
                  width: "100%",
                  background: "#fff",
                  borderRadius: "1rem",
                  minHeight: 0,
                  height: 200,
                  border: "2px solid #30C7B5",
                  padding: "10px",
                }}
              >
                <iframe
                  title="Franz Schubert 188, Peralvillo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.2580837922883!2d-99.1378145261382!3d19.449813940470288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8f3237d7067%3A0x68e44b3c69ba8466!2sC.%20Franz%20Schubert%20188%2C%20Peralvillo%2C%20Cuauht%C3%A9moc%2C%2006220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1718039997803!5m2!1ses-419!2smx"
                  width="100%"
                  height="180"
                  style={{
                    border: 0,
                    borderRadius: "1rem",
                    minHeight: 0,
                    maxHeight: 180,
                    width: "100%",
                    display: "block",
                    margin: 0,
                    padding: 0,
                  }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Card de atención personalizada */}
          <div
            className="w-full rounded-2xl bg-white/90 border border-[#EBEFF2] shadow-[0_1.5px_6px_rgba(80,90,120,0.05)] flex flex-col items-center justify-center p-5 min-h-[110px] md:max-w-md"
            style={{
              minWidth: 290,
            }}
          >
            <span className="text-primary text-lg font-bold mb-1 text-center">Atención personalizada 24/7</span>
            <span className="text-gray-600 text-[1rem] text-center leading-relaxed">
              Nuestro equipo está listo para apoyarte en cualquier momento.
              <br/>
              Llámanos o escríbenos y obtén respuesta inmediata.
            </span>
          </div>
        </div>
        {/* FORMULARIO */}
        <form
          className={`w-full lg:w-1/2 max-w-xl mx-auto rounded-2xl p-5 md:p-8 ${CARD_SOFT} flex flex-col gap-6 animate-fade-in-up`}
          style={{ minWidth: 0 }}
          onSubmit={handleDummy}
        >
          <h4 className="text-2xl md:text-3xl font-bold font-heading text-gray-800 mb-2 text-center">
            ¿Tienes dudas? Llena el formulario
          </h4>
          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="block font-semibold mb-1 text-gray-800">Nombre <span className="text-red-500">*</span></label>
            <Input id="nombre" name="nombre" required placeholder="Tu nombre" maxLength={64} autoComplete="off"
              className="border border-gray-200 focus:border-primary rounded-lg bg-[#FAFBFC] text-[1rem] px-4 py-2 font-sans placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="mascota" className="block font-semibold mb-1 text-gray-800">Nombre de tu mascota <span className="text-red-500">*</span></label>
            <Input id="mascota" name="mascota" required placeholder="Nombre de tu mascota" maxLength={64} autoComplete="off"
              className="border border-gray-200 focus:border-primary rounded-lg bg-[#FAFBFC] text-[1rem] px-4 py-2 font-sans placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tipo" className="block font-semibold mb-1 text-gray-800">Tipo de mascota <span className="text-red-500">*</span></label>
            <select
              id="tipo"
              name="tipo"
              required
              className="w-full px-4 py-2 border border-gray-200 focus:border-primary rounded-lg bg-[#FAFBFC] text-gray-900 text-[1rem] font-sans"
            >
              <option value="">Selecciona tipo</option>
              {mascotaTipos.map((tipo, idx) => (
                <option value={tipo} key={idx}>{tipo}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="municipio" className="block font-semibold mb-1 text-gray-800">¿De dónde nos escribes? <span className="text-red-500">*</span></label>
            <select
              id="municipio"
              name="municipio"
              required
              className="w-full px-4 py-2 border border-gray-200 focus:border-primary rounded-lg bg-[#FAFBFC] text-gray-900 text-[1rem] font-sans"
            >
              <option value="">Selecciona municipio o delegación</option>
              {municipiosCDMX.map((mun, idx) => (
                <option value={mun} key={idx}>{mun}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="telefono" className="block font-semibold mb-1 text-gray-800">Teléfono <span className="text-red-500">*</span></label>
            <Input id="telefono" name="telefono" required placeholder="Tu teléfono" maxLength={20} autoComplete="tel"
              className="border border-gray-200 focus:border-primary rounded-lg bg-[#FAFBFC] text-[1rem] px-4 py-2 font-sans placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="correo" className="block font-semibold mb-1 text-gray-800">Correo electrónico <span className="text-red-500">*</span></label>
            <Input id="correo" name="correo" type="email" required placeholder="tu@correo.com" autoComplete="email" maxLength={60}
              className="border border-gray-200 focus:border-primary rounded-lg bg-[#FAFBFC] text-[1rem] px-4 py-2 font-sans placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="mensaje" className="block font-semibold mb-1 text-gray-800">Mensaje</label>
            <Textarea id="mensaje" name="mensaje" placeholder="¿Cómo podemos ayudarte?" rows={3} maxLength={500}
              className="border border-gray-200 rounded-lg bg-[#FAFBFC] text-[1rem] px-4 py-2 font-sans placeholder-gray-400" />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary/90 text-white font-bold py-3 rounded-xl border-0 hover:bg-primary transition mt-2 text-lg shadow-[0_1.5px_8px_rgba(48,199,181,0.08)] active:scale-98"
            disabled={sending}
          >
            {sending ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Container>
      {/* Responsive paddings mejorados */}
      <style>{`
        @media (max-width: 1024px) {
          .lg\\:flex-row {
            flex-direction: column !important;
          }
          .lg\\:w-1\\/2 {
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .rounded-3xl, .rounded-2xl { border-radius: 1.1rem !important; }
          .max-w-xl, .md\\:max-w-md { max-width: 100% !important; }
          .p-7, .p-9, .md\\:p-8, .p-5 { padding: 1rem !important; }
          .py-14 { padding-top: 2.2rem !important; padding-bottom: 1.6rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;

