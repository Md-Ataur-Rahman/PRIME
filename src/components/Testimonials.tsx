import { Quote, Star } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./ui";

const STORIES = [
  {
    name: "Maya Chen",
    role: "MSc, Public Health · NYU",
    quote:
      "I walked into PRIME with a vague interest in health equity and left with a proposal my supervisor called 'unusually mature.' The methodology studio alone was worth the semester.",
    img: "https://images.pexels.com/photos/5538605/pexels-photo-5538605.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Daniel Okonkwo",
    role: "Honors undergraduate · UCLA",
    quote:
      "Undergraduate research is often 'figure it out.' PRIME was the first time someone taught me how to think, not just how to format an APA paper. I presented at a regional conference this spring.",
    img: "https://images.pexels.com/photos/30494341/pexels-photo-30494341.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Amara Diallo",
    role: "PhD Year 1 · LSE",
    quote:
      "The ethics module is not a lecture on plagiarism. It is judgment training. I used the IRB clinic before my upgrade and it saved me a three-month delay.",
    img: "https://images.pexels.com/photos/12923656/pexels-photo-12923656.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Sofia Alvarez",
    role: "Senior, Psychology · University of Toronto",
    quote:
      "I was terrified of stats and of sounding unoriginal. The writing studio taught me argument, not adjectives. My thesis grade jumped a full band.",
    img: "https://images.pexels.com/photos/3776193/pexels-photo-3776193.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Student voices"
          title={
            <>
              Scholars in the making,
              <em className="text-gold-deep"> in their own words.</em>
            </>
          }
          subtitle="Honors students, master’s candidates, and early doctoral researchers — the people PRIME was built for."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <figure className="lift flex h-full flex-col rounded-3xl border border-line bg-cream/40 p-7 sm:p-8">
                <Quote className="h-7 w-7 text-gold" />
                <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-navy sm:text-[1.35rem]">
                  “{s.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40"
                  />
                  <div>
                    <div className="font-semibold text-navy">{s.name}</div>
                    <div className="text-xs text-navy-muted">{s.role}</div>
                  </div>
                  <div className="ml-auto flex text-gold">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <Star key={n} className="h-3.5 w-3.5 fill-gold" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
