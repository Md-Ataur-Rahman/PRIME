import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";
import { Button } from "./ui";

const LINKS = [
  { href: "#program", label: "Program Details" },
  { href: "#benefits", label: "About PRIME" },
  { href: "#mentors", label: "Organizing Committee" },
  { href: "#footer", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-navy">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label="PRIME home">
          <img
            src="/logo.png"
            alt="PRIME seal"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40"
          />
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold tracking-[0.14em] text-ivory">
              PRIME
            </div>
            <div className="hidden text-[0.5rem] font-medium uppercase tracking-[0.22em] text-gold-soft sm:block">
              {/* Research Academy */}
                Research, Innovation, Methodology and Ethics
            </div>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-gold text-[13px] font-medium tracking-wide text-ivory"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#registrationCard" rel="noopener noreferrer">
            <Button className="px-5 py-2.5 cursor-pointer">
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
        

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-ivory lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-navy/5 bg-navy/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        
        <ul className="flex flex-col gap-1 px-6 py-4">
          
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-2xl text-white text-center"
              >
                {l.label}
                
              </a>
            </li>
            
          ))}  
        </ul>
        {/* Mobile Register Button */}
        <div className="px-6 pb-5">
          <a href="#registrationCard" rel="noopener noreferrer">
            <Button className="w-full justify-center px-5 py-2.5 cursor-pointer">
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
               
      
    </header>
  );
}
