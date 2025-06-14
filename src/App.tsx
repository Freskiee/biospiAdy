import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Socios from "./pages/Socios";
import Urnas from "./pages/Urnas";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="bg-secondary/10 font-sans min-h-screen w-full flex flex-col">
          <Navbar />
          <div className="flex-1 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/socios" element={<Socios />} />
              <Route path="/urnas" element={<Urnas />} />
              <Route path="/contacto" element={<Contacto />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <footer className="text-center py-8 bg-white/95 border-t shadow-inner mt-10">
            <div className="flex flex-col items-center gap-3">
              <span className="text-3xl font-heading text-primary font-black">🐾 Biospi</span>
              <span className="text-gray-700 font-medium">info@biospi.com | <a href="tel:+5491112345678" className="text-primary font-bold underline">+54 9 11 1234-5678</a></span>
              <span className="block text-sm text-gray-500 mt-1">Contrata con nosotros</span>
              <div className="flex gap-7 mt-2 justify-center">
                <a href="/" className="text-primary font-semibold hover:underline">Inicio</a>
                <a href="/servicios" className="text-primary font-semibold hover:underline">Servicios</a>
                <a href="/socios" className="text-primary font-semibold hover:underline">Socios</a>
                <a href="/urnas" className="text-primary font-semibold hover:underline">Urnas</a>
                <a href="/contacto" className="text-primary font-semibold hover:underline">Contacto</a>
              </div>
              <span className="mt-2 text-xs text-gray-400">&copy; {new Date().getFullYear()} Biospi. Todos los derechos reservados.</span>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
