import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import { Container, Reveal, SectionHeading } from "./ui";

const ITEMS = [
  {
    q: "Who is PRIME designed for?",
    a: "Ambitious undergraduates (especially honors and thesis students), master’s candidates, and early-stage doctoral researchers. If you are about to write a proposal, thesis, dissertation chapter, or first paper — PRIME is built for that moment.",
  },
  {
    q: "Do I need prior research experience?",
    a: "No. Explorer and Scholar assume curiosity, not a methods course. We start with how to ask a question and build to design, analysis, ethics, and writing. Fellows typically have a live project underway.",
  },
  {
    q: "How much time should I set aside?",
    a: "Plan for 4–6 hours a week across 16 weeks: studio lessons, a short practice, and optional live clinics. Many students complete it alongside a full course load.",
  },
  {
    q: "Is the certificate recognized?",
    a: "You receive a verifiable PRIME Certificate of Completion covering methodology and research ethics. Students include it in honors applications, lab CVs, and graduate portfolios. It is professional training — not a university degree.",
  },
  {
    q: "Can this help with my thesis or dissertation?",
    a: "Yes. That is the point. Templates, critique circles, and (on the Fellow track) 1:1 proposal review are designed around real student projects — not hypothetical case studies.",
  },
  {
    q: "Are sessions live or on-demand?",
    a: "Studios are on-demand so you can work around seminars and labs. Weekly live clinics and office hours are optional but strongly recommended. Recordings are posted within 24 hours.",
  },
  {
    q: "What if it isn’t the right fit?",
    a: "Scholar and Fellow purchases include a 14-day, no-questions refund if you have completed fewer than two studios. After that, we would rather help you finish than keep a frustrated student.",
  },
  {
    q: "Do you offer institutional or cohort pricing?",
    a: "Yes. Honors colleges, research methods courses, and graduate schools run PRIME as a co-curricular. Write to us and we will design a cohort with a faculty dashboard.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Questions"
              title={
                <>
                  Straight answers,
                  <em className="text-gold-deep"> no prospectus fog.</em>
                </>
              }
              subtitle="If you are still unsure, enroll as Explorer — it is free — and decide with a studio under your belt."
            />
          </div>

          <div className="divide-y divide-line rounded-3xl border border-line bg-cream/30">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 40}>
                  <div>
                    <button
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="font-medium text-navy">{item.q}</span>
                      <ChevronDown
                        className={cn(
                          "chevron h-5 w-5 shrink-0 text-gold-deep",
                          isOpen && "open",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-navy-muted sm:px-7">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
