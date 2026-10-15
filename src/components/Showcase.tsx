import { useState } from "react";
import { Check, CirclePlay } from "lucide-react";
import { cn } from "../utils/cn";
import { Container, Reveal, SectionHeading } from "./ui";

const MODULES = [
  {
    id: "01",
    title: "Foundations of Inquiry",
    weeks: "Weeks 1–2",
    points: ["Epistemology without the fog", "What makes a question researchable", "Building your scholar identity"],
  },
  {
    id: "02",
    title: "Literature & Theory",
    weeks: "Weeks 3–4",
    points: ["Systematic searching", "Thematic synthesis maps", "Theoretical frameworks that actually fit"],
  },
  {
    id: "03",
    title: "Research Design Studio",
    weeks: "Weeks 5–7",
    points: ["Qual, quant & mixed methods", "Sampling and power", "Validity, reliability, trustworthiness"],
  },
  {
    id: "04",
    title: "Data & Analysis",
    weeks: "Weeks 8–10",
    points: ["Collection protocols", "Thematic coding & statistics literacy", "Interpreting without overclaiming"],
  },
  {
    id: "05",
    title: "Innovation Lab",
    weeks: "Weeks 11–12",
    points: ["Original contribution statements", "Design thinking for scholars", "Interdisciplinary methods"],
  },
  {
    id: "06",
    title: "Ethics & Integrity",
    weeks: "Week 13",
    points: ["IRB & consent in practice", "Authorship, AI, and citation", "Difficult cases, real judgment"],
  },
  {
    id: "07",
    title: "Writing to Publish",
    weeks: "Weeks 14–15",
    points: ["IMRaD and beyond", "Argument architecture", "Peer-review rehearsal"],
  },
  {
    id: "08",
    title: "Present & Defend",
    weeks: "Week 16",
    points: ["Conference posters & talks", "Viva / defense prep", "Portfolio of publishable work"],
  },
];

export function Showcase() {
  const [active, setActive] = useState(0);
  const current = MODULES[active];

  return (
    <section id="curriculum" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The curriculum"
          title={
            <>
              Sixteen weeks. Eight studios.
              <br className="hidden sm:block" /> A complete research education.
            </>
          }
          subtitle="A sequenced academy — not a pile of videos. Each studio builds the next, with clinics, critiques, and a final portfolio."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal variant="left">
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-cream shadow-[0_30px_80px_rgba(14,39,68,0.08)]">
              <img
                src="/images/platform-ui.jpg"
                alt="PRIME learning platform showing the Research Design Studio"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 text-gold-soft">
                  <CirclePlay className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Inside the academy
                  </span>
                </div>
                <p className="mt-1 font-display text-2xl">Research Design Studio</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                "https://images.pexels.com/photos/8085267/pexels-photo-8085267.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/12319326/pexels-photo-12319326.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg?auto=compress&cs=tinysrgb&w=600",
              ].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={
                    i === 0
                      ? "Student taking research notes"
                      : i === 1
                        ? "Student presenting research"
                        : "Students collaborating on a study"
                  }
                  className="h-24 w-full rounded-2xl object-cover ring-1 ring-line sm:h-28"
                />
              ))}
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                Select a studio
              </p>
            </Reveal>
            <div className="mt-4 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
              {MODULES.map((m, i) => {
                const isOn = i === active;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActive(i)}
                    className={cn(
                      "w-full px-5 py-4 text-left transition-colors sm:px-6",
                      isOn ? "bg-cream/80" : "hover:bg-cream/40",
                    )}
                    aria-expanded={isOn}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-lg text-gold-deep">{m.id}</span>
                        <span className="font-medium text-navy">{m.title}</span>
                      </div>
                      <span className="hidden text-xs uppercase tracking-wider text-navy-muted sm:inline">
                        {m.weeks}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300",
                        isOn ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <ul className="mt-3 space-y-1.5 pb-1">
                          {m.points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-navy-muted">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-navy-muted">
              Currently viewing <span className="font-medium text-navy">{current.title}</span> ·{" "}
              {current.weeks}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
