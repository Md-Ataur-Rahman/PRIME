import { ClipboardCheck, GraduationCap, Telescope } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";

const STEPS = [
  {
    icon: Telescope,
    n: "01",
    title: "Choose your track",
    body: "Start free as Explorer, enroll in the full Scholar academy, or apply as a Fellow if you already have a live project.",
  },
  {
    icon: ClipboardCheck,
    n: "02",
    title: "Train in eight studios",
    body: "Sixteen weeks of sequenced craft — inquiry, literature, design, data, innovation, ethics, writing, and defense.",
  },
  {
    icon: GraduationCap,
    n: "03",
    title: "Leave with proof",
    body: "A research portfolio, a methodology-and-ethics certificate, and the confidence to sit across from any supervisor.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How PRIME works"
          title={
            <>
              Three steps from curiosity to
              <em className="text-gold-deep"> credential.</em>
            </>
          }
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="gold-rule pointer-events-none absolute left-[12%] right-[12%] top-10 hidden md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <article className="relative rounded-3xl border border-line bg-cream/40 p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white text-navy shadow-sm">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 font-display text-sm text-gold-deep">{s.n}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
