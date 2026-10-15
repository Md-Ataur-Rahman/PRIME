import { ArrowRight, Play } from "lucide-react";
import { Button, Container, Reveal } from "./ui";



export function Hero() {
  return (
    <section id="top" className="hero-mesh grain relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full border border-gold/20" />
        <div className="absolute -left-10 top-40 h-48 w-48 rounded-full border border-navy/10" />
        <div className="absolute -right-20 top-16 h-80 w-80 rounded-full border border-gold/15" />
        <div className="pulse-gold absolute right-[18%] top-28 h-3 w-3 rounded-full bg-gold" />
        <div className="pulse-gold absolute left-[12%] top-[42%] h-2 w-2 rounded-full bg-gold/80" />
      </div>

      <Container className="relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20">
        <div>
          

          <Reveal delay={80}>
            <h1 className="font-display text-[2.65rem] font-semibold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-[4.35rem]">
              PRIME
              <span className="italic text-gold-deep"> 2026</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-muted sm:text-lg">
              <span className="font-bold "> PRIME 2.0 </span> is an International Research Initiative —{" "}
              <span className="font-medium text-navy">
                Principles of Research, Innovation, Methodology and Ethics
              </span>
              . that brings together researchers, innovators, and aspiring scholars to exchange ideas, advance knowledge, and promote research excellence. By connecting academia, innovation and gloabl standards, it encourages collaboration and discovery while helping shape a more research-driven future.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYaC4oyIiccNZp4eHPf8z-hMa33Vut-mUD0SdUYHbkQ-6o7w/viewform?usp=header" target="_blank">
                <Button className="px-7 py-3.5 text-[15px] cursor-pointer">

                  Submit your Abstract and Register 
                  <ArrowRight className="h-4 w-4" />
                </Button>
                </a>
              <a href="#registrationCard">
                <Button variant="outline" className="w-full px-7 py-3.5 text-[15px] sm:w-auto cursor-pointer">
                  <Play className="h-4 w-4 fill-navy" />
                  Learn More About PRIME
                </Button>
              </a>
            </div>
          </Reveal>
   </div>

        <Reveal variant="scale" delay={180} className="relative mx-auto w-full max-w-[460px] p-10">
          <div className="relative aspect-square">
            <div className="orbit absolute inset-[-6%] rounded-full border border-dashed border-gold/50" />
            <div className="orbit-slow absolute inset-[-14%] rounded-full border border-navy/10" />
            <div className="absolute inset-[6%] rounded-full bg-gradient-to-b from-cream to-white shadow-[0_30px_80px_rgba(14,39,68,0.12)] ring-1 ring-gold/25" />
            <img
              src="/logo.png"
              alt="PRIME — Principles of Research, Innovation, Methodology and Ethics"
              className="absolute inset-[8%] h-[84%] w-[84%] rounded-full object-cover"
            />

            <div className="float-y glass absolute -left-4 top-[18%] hidden max-w-[190px] rounded-2xl px-3.5 py-3 shadow-lg sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-deep">
                Virtual Event
              </p>
              <p className="mt-0.5 text-sm font-medium text-navy">Abstract Presentation & Review - 27th November</p>
            </div>
            <div className="float-y-delayed glass absolute -right-2 bottom-[22%] hidden max-w-[200px] rounded-2xl px-3.5 py-3 shadow-lg sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-deep">
                In-Person Event
              </p>
              <p className="mt-0.5 text-sm font-medium text-navy">Panel Discussion - 5th December</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy/10">
                <div className="h-full w-[68%] rounded-full bg-gold" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="gold-rule" />
    </section>
  );
}
