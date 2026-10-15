import { ArrowRight, Check } from "lucide-react";
import { Button, Container, Reveal, SectionHeading } from "./ui";
import { PiArrowRightBold } from "react-icons/pi";

const REGISCARD = [
  {
    id: 1,
    img: "../../public/poster/call_abstract.jpg",
    destination: "https://docs.google.com/forms/d/e/1FAIpQLSccUCd2PL7ILQPkBBLBWR8IvkQ-SLwwpD2SjGoPOND5C7VSZw/viewform",
    btnName: "Participant Registration"
  },
  {
    id: 2,
    img: "../../public/poster/call_abstract.jpg",
    destination: "https://docs.google.com/forms/d/e/1FAIpQLSfYaC4oyIiccNZp4eHPf8z-hMa33Vut-mUD0SdUYHbkQ-6o7w/viewform?usp=header",
    btnName: "Abstract Registration"
  },
];

const POINTERS_REG = [
  "Event Dates: Day 1 is on 27 November 2026 (Online) and Day 2 is on 05 December 2026 (Onsite).",
  "Onsite Venue: Hosted at Rezaqul Haidar Hall, Eastern University.",
  "Undergraduate Fee: BDT 300 for undergraduate student normal participants.",
  "Graduate Fee: BDT 600 for graduate student normal participants.",
  "Included Benefits: Registration covers food, event kits, arranged transport, and a participation certificate.",
  "bKash Payment: Send fees via personal bKash to 01610751504.",
  "Rocket Payment: Send fees via personal Rocket to 01772265969.",
  "Transaction Charges: All payments must include applicable cash-out or transaction charges.",
  "No Refunds: All registration fees are strictly non-refundable.",
  "Award Eligibility: Normal participants are not eligible for the Best Paper Award, which is reserved for abstract presenters."
];
const POINTERS_ABS = [
  "Only the Corresponding Author needs to submit the form on behalf of all authors.",
  "Each abstract or paper can have a maximum of 3 authors, including the Corresponding Author.",
  "The Corresponding Author must provide complete information for all co-authors.",
  "Each author must complete an individual registration and pay the applicable registration fee.",
  "Undergraduate presenters pay BDT 550 standard or BDT 500 discounted.",
  "Graduate presenters pay BDT 1,100 standard or BDT 1,000 discounted.",
  "Discounts are available to eligible participants with a valid Ambassador Code or qualifying IEEE membership.",
  "Abstracts must follow the official abstract format and submission guidelines.",
  "The online research programme is on 27 November 2026, and the onsite programme is on 5 December 2026.",
  "Registration fees are strictly non-refundable, and all payment details must be accurate for verification."
];

export function RegistrationCards() {
  return (
      <section className="bg-white py-20 sm:py-24" id="registrationCard">
        <Container>
          <SectionHeading
            eyebrow="The faculty"
            title={
              <>
                Mentors who still
                <em className="text-gold-deep"> do the work.</em>
              </>
            }
            subtitle="Clinics are led by researchers who publish, review, and sit on ethics boards — not by generic course hosts."
          />
          {/* Cards */}
          <div className="my-14 grid gap-10 sm:grid-cols-2">
            {REGISCARD.map((m, i) => (
              <Reveal key={i} delay={i * 70}>
                <article className="lift overflow-hidden rounded-3xl border border-line bg-white">
                  <div className="overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.img}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                      <ul className="mt-3 space-y-1.5 pb-1">
                                                    
                        {m.id === 1 ? (
                          POINTERS_REG.map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-navy-muted"
                            >
                              <PiArrowRightBold className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                              {point}
                            </li>
                          ))
                        ) : (
                          POINTERS_ABS.map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-navy-muted"
                            >
                              <PiArrowRightBold className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                              {point}
                            </li>
                          ))
                        )}

                            
                      </ul>
                  </div>
                  <div className="p-5 text-center">
                    <Button className="px-5 py-2.5">
                      <a href={`${m.destination}`} target="_blank" className="font-medium text-navy underline-offset-4">
                        {m.btnName} 
                      </a>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
}
