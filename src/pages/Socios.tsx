
import React, { useState } from "react";
import Container from "@/components/layout/Container";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Socios = () => {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Dummy handler to simulate submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 1800);
    }, 1400);
  };

  return (
    <main className="bg-secondary/10 min-h-screen">
      {/* Cover/Hero Image */}
      <div className="w-full relative h-56 md:h-64 flex items-center justify-center bg-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=1100&q=80"
          alt="Colaboración veterinaria"
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-60 pointer-events-none"
        />
        <Container className="relative z-10 py-10 flex flex-col items-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2 text-center drop-shadow">
            SOCIOS COMERCIALES Y VETERINARIOS
          </h1>
        </Container>
      </div>

      {/* Main Text */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mx-auto rounded-xl bg-white/90 shadow-lg p-8 animate-fade-in-up text-center space-y-6">
            <p className="text-lg md:text-xl text-gray-700 font-semibold">
              En <span className="text-primary font-bold">BIOSPI</span> estamos abiertos a una sinergia de sumar esfuerzos para lograr una efectiva relación comercial bajo una cultura de “GANAR, GANAR”.
            </p>
            <p className="text-base text-gray-700">
              Buscamos <b>socios comerciales</b> y especialistas en el ramo veterinario que deseen brindar un servicio más completo a sus clientes y sumarse a nuestra misión.
            </p>
            <p className="text-base text-gray-700">
              <b>Estamos seguros de que juntos, hombro a hombro, podemos hacer un gran equipo y garantizar un trato digno a las mascotas que tanto amor les tienen nuestros clientes.</b>
            </p>
            <blockquote className="font-heading italic text-xl md:text-2xl text-secondary-foreground/90 font-bold">
              “JUNTOS LOGRAREMOS ALCANZAR EL ÉXITO, CRECER Y SERVIR”
            </blockquote>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="pb-14">
        <Container>
          <div className="bg-secondary/60 rounded-xl p-7 md:p-11 shadow flex flex-col items-center max-w-xl mx-auto animate-fade-in-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-3 text-center">¿Te interesa ser parte de este noble sueño?</h2>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-2 px-7 py-3 text-lg" onClick={() => setOpen(true)}>
                  Quiero ser socio
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-heading text-primary text-2xl">Solicitud de asociación</DialogTitle>
                  <DialogDescription className="text-base mt-1 mb-2">
                    Completa el formulario y nos pondremos en contacto contigo.
                  </DialogDescription>
                </DialogHeader>
                {success ? (
                  <div className="text-green-700 py-7 text-center font-bold text-lg animate-fade-in">
                    ¡Gracias por tu interés! <br />
                    Pronto nos pondremos en contacto contigo.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up">
                    <div>
                      <label htmlFor="nombre" className="block mb-1 font-medium text-gray-700">Nombre</label>
                      <Input id="nombre" name="nombre" required placeholder="Tu nombre completo" maxLength={100} />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block mb-1 font-medium text-gray-700">Teléfono</label>
                      <Input id="telefono" name="telefono" required placeholder="Tu teléfono" maxLength={30} />
                    </div>
                    <div>
                      <label htmlFor="correo" className="block mb-1 font-medium text-gray-700">Correo electrónico</label>
                      <Input id="correo" name="correo" type="email" required placeholder="tu@correo.com" maxLength={80} />
                    </div>
                    <div>
                      <label htmlFor="comentario" className="block mb-1 font-medium text-gray-700">Comentario</label>
                      <Textarea id="comentario" name="comentario" placeholder="Cuéntanos sobre tu clínica, experiencia, ideas, etc..." rows={3} maxLength={350} />
                    </div>
                    <div className="flex gap-4 flex-row-reverse items-center justify-end">
                      <Button type="submit" className="bg-primary font-bold min-w-[120px]" disabled={sending}>
                        {sending ? "Enviando..." : "Enviar"}
                      </Button>
                      <DialogClose asChild>
                        <Button variant="ghost" type="button">
                          Cancelar
                        </Button>
                      </DialogClose>
                    </div>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Socios;

