import { BookOpen, Lightbulb, FlaskConical, Scale, Search, PenLine, ShieldCheck, Sparkles } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";

const PILLARS = [
  {
    num: "01",
    icon: BookOpen,
    title: "Principles of Research",
    body: "Learn how scholars actually think: problem framing, theoretical grounding, and questions that are worth answering — not just easy to measure.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Innovation",
    body: "Move beyond replication. Design original contributions, mixed-method hybrids, and research that is both rigorous and genuinely new.",
  },
  {
    num: "03",
    icon: FlaskConical,
    title: "Methodology",
    body: "Master qualitative, quantitative, and mixed designs. Sampling, instruments, analysis, and validity — taught as a craft, not a checklist.",
  },
  {
    num: "04",
    icon: Scale,
    title: "Ethics",
    body: "Integrity is not an appendix. Consent, citation, IRB, authorship, and the quiet decisions that make work trustworthy.",
  },
  
];



export function Features() {
  return (
    <section id="program" className="bg-cream/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The PRIME method"
          title={
            <>
              Four pillars. One standard of
              <em className="text-gold-deep"> excellence.</em>
            </>
          }
          subtitle="Named for what every serious student of research must command: Principles, Innovation, Methodology, and Ethics."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 90}>
              <article className="lift group h-full rounded-3xl border border-line bg-white p-7 sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl text-gold/70">{p.num}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-muted">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>       
      </Container>
    </section>
  );
}
