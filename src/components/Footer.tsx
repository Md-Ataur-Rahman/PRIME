import { FaEnvelope, FaFacebook } from "react-icons/fa";
import { Container } from "./ui";

const COLS = [
  {
    title: "Contact",
    links: [
      { href: "mailto:ieee@easternuni.edu.bd",
      label: "ieee@easternuni.edu.bd" },
      {
      href: "mailto:ieee.cs@easternuni.edu.bd",
      label: "ieee.cs@easternuni.edu.bd"
    },
    {
      href: "mailto:ieee.we@easternuni.edu.bd",
      label: "ieee.we@easternuni.edu.bd"
    }
      
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://www.facebook.com/ieee.eusb", label: "IEEE EUSB" },
      { href: "https://www.facebook.com/profile.php?id=61587199602055", label: "IEEE CS EUSBC" },
      { href: "https://www.facebook.com/profile.php?id=61593112281499", label: "IEEE WIE EUSB AG" },
      
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#program", label: "Program Details" },
      { href: "#benefits", label: "About PRIME" },
      { href: "#mentors", label: "Organizing Committee" },
      { href: "#footer", label: "Contact" }
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy" id="footer">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.7fr_0.7fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <img src="/logo.png" alt="PRIME" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
              <div>
                <div className="font-display text-xl font-semibold tracking-[0.14em] text-ivory">PRIME</div>
                <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-navy-muted">
                  
                </div>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-muted">
              Principles of Research, Innovation, Methodology and Ethics. The student academy for
              work that stands up to scrutiny.
            </p>
            
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="link-gold text-sm text-ivory" target="_blank">
                      <span className="flex gap-1 items-center py-1">
                      {l.label.includes("@") && <FaEnvelope />}
                      {l.href.toLowerCase().includes("facebook") && <FaFacebook />}
                      {l.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-rule mt-14" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PRIME 2.0 by IEEE Eastern University Student Branch. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">Principles · Innovation · Methodology · Ethics</p>
        </div>
      </Container>
    </footer>
  );
}
