"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "About us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Integration", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Waitlist", href: "#" },
];

const Navigation = () => {
  return (
    <header className="fixed top-5 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center justify-between w-full p-2.5 sm:p-4 bg-black/60 backdrop-blur-[10px] border border-white/10 rounded-2xl">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/VNxTg4trlyPkvi55POCdKXQ04kY-2.png"
              alt="Fusion AI Logo"
              width={40}
              height={40}
            />
            <span className="text-white text-[20px] font-medium leading-none hidden sm:inline">Fusion AI</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-base font-normal leading-none transition-opacity hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden lg:block bg-white text-black py-3 px-8 rounded-lg text-base font-medium transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            >
              Get Started
            </a>
            
            <button
              aria-label="Open menu"
              className="lg:hidden p-2 text-white rounded-md hover:bg-white/10"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;