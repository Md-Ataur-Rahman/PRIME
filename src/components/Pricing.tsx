import { ArrowRight } from "lucide-react";
import { Button, Container, Reveal, SectionHeading } from "./ui";



export function Pricing() {

  return (
    <section id="pricing" className="bg-cream/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Student pricing"
          title={
            <>
              Serious training.
              <em className="text-gold-deep"> Fair for students.</em>
            </>
          }
          subtitle="One payment. No subscriptions. Designed around a semester, not a sales funnel."
        />

        

        <Reveal>
          <p className="mt-8 text-center text-sm text-navy-muted">
            Need a department license or honors-college cohort?{" "}
            <Button className="px-5 py-2.5">
            <a href="https://www.youtube.com/" target="_blank" className="font-medium text-navy underline-offset-4">
              Regitration Link 
            </a>
            <ArrowRight className="h-4 w-4" />
          </Button>
          </p>
          
        </Reveal>
      </Container>
    </section>
  );
}
