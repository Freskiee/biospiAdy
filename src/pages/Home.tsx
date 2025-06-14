
import React from "react";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import MisionVisionValores from "@/components/MisionVisionValores";
import SocialLinks from "@/components/SocialLinks";
import SolicitaInformacion from "@/components/SolicitaInformacion";

const Home = () => (
  <main className="w-full min-h-screen flex flex-col bg-[#f6fafb]">
    <Hero />
    <section className="px-2 md:px-0">
      <QuienesSomos />
    </section>
    <MisionVisionValores />
    <SocialLinks />
    <SolicitaInformacion />
  </main>
);

export default Home;
