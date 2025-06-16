import React from "react";
import { Facebook, Instagram } from "lucide-react";

const social = [
  {
    href: "https://www.facebook.com/Biospii",
    label: "Facebook",
    icon: Facebook,
    color: "#1877F3",
  },
  {
    href: "https://www.instagram.com/biospi_mx/",
    label: "Instagram",
    icon: Instagram,
    color: "#E1306C",
  },
];

const SocialLinks = () => (
  <section className="w-full py-10 flex flex-col items-center bg-[#f6fafb]">
    <h2 className="text-2xl font-heading font-bold mb-2 text-primary">Mantente al día</h2>
    <div className="flex gap-7 mb-5">
      {social.map(({ href, label, icon: Icon, color }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-white border-2 border-[#B1E5F4] hover:border-[#30C7B5] transition-all hover:scale-110 shadow-lg"
        >
          <Icon color={color} size={30} />
        </a>
      ))}
    </div>
  </section>
);

export default SocialLinks;
