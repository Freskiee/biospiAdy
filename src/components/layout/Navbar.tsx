import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Socios", to: "/socios" },
  { label: "Urnas", to: "/urnas" },
  { label: "Contacto", to: "/contacto" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <header className={cn(
      "sticky top-0 z-40 w-full bg-white/95 shadow transition-all border-b border-primary/15"
    )}>
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-heading tracking-tight text-primary font-extrabold group-hover:scale-105 transition-transform duration-200">
            <span role="img" aria-label="paw">🐾</span> Biospi
          </span>
        </Link>
        <ul className="hidden md:flex gap-7 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                className={cn(
                  "transition-colors font-semibold px-3 py-2 rounded-xl hover:bg-primary/15 hover:text-primary text-gray-700 hover:scale-105 duration-150",
                  location.pathname === item.to
                    ? "bg-primary/10 text-primary shadow font-bold"
                    : ""
                )}
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Burger menu for mobiles */}
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

// Menú móvil tipo friendly, colores y animación
const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false); // Auto-cierra menú en cambio de ruta
  }, [location.pathname]);

  return (
    <>
      <button
        className="p-2 rounded-xl border border-gray-200 bg-white/90 hover:bg-primary/10 focus:bg-primary/20 transition"
        aria-label="Abrir menú"
        onClick={() => setOpen((s) => !s)}
      >
        <svg width={26} height={26} fill="none" stroke="#929872" strokeWidth={2}><path d="M4 7h18M4 13h18M4 19h18" /></svg>
      </button>
      {open && (
        <div className="absolute top-16 right-2 w-48 z-50 bg-white/95 border rounded-2xl shadow-xl p-4 animate-fade-in-up">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "block px-4 py-2 rounded-xl text-gray-700 font-semibold hover:bg-primary/15 hover:text-primary transition-all",
                    location.pathname === item.to
                      ? "bg-primary/10 text-primary shadow"
                      : ""
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
