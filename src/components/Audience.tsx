import { BookMarked, ScrollText, University } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";

const AUDIENCES = [
  {
    icon: University,
    title: "Undergraduates & honors",
    body: "Turn a capstone or honors thesis from a scramble into a piece of work you are proud to defend — and to send with graduate applications.",
    tag: "First research experience",
  },
  {
    icon: BookMarked,
    title: "Master’s candidates",
    body: "Compress years of tacit knowledge into one semester. Design a study that is original, ethical, and actually finishable.",
    tag: "Proposal to dissertation",
  },
  {
    icon: ScrollText,
    title: "Early doctoral researchers",
    body: "Upgrade, transfer, and first-paper season. Tighten contribution, methods, and ethics before a committee asks the hard questions.",
    tag: "Upgrade & first paper",
  },
];

export function Audience() {
  return (
    <section className="bg-cream/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Built for students"
          title={
            <>
              Wherever you are in the journey,
              <em className="text-gold-deep"> the standard is the same.</em>
            </>
          }
          subtitle="PRIME is not a faculty workshop. It is an academy for the students who will become them."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <article className="lift h-full rounded-3xl border border-line bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-navy">
                  <a.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  {a.tag}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
