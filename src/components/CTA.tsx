import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button, Container, Reveal } from "./ui";
import { useEnroll } from "../context/EnrollContext";

export function CTA() {
  const { openEnroll } = useEnroll();

  return (
    <section className="bg-cream/40 py-20 sm:py-24">
      <Container>
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[32px] border border-gold/30 bg-white shadow-[0_30px_80px_rgba(14,39,68,0.08)]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-deep">
                  Next cohort closes soon
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                  Begin as a student.
                  <br />
                  <em className="text-gold-deep">Finish as a scholar.</em>
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-muted">
                  Join 12,400 students who refused to guess their way through research. Start free,
                  or enroll in Scholar and complete the academy this semester.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Free Explorer track — no card required",
                    "16-week Scholar academy + certificate",
                    "Fellow mentorship for live projects",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-navy">
                      <BadgeCheck className="h-4 w-4 text-gold-deep" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button onClick={() => openEnroll("Scholar")} className="px-7 py-3.5">
                    Enroll in Scholar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => openEnroll("Explorer")}>
                    Start Explorer free
                  </Button>
                </div>
              </div>
              <div className="relative hidden h-full min-h-[340px] lg:block">
                <img
                  src="/images/certificate.jpg"
                  alt="PRIME Certificate of Completion"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
