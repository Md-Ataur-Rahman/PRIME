import { Container, Reveal, SectionHeading } from "./ui";
const BANNERS = [
  {
    id: 1,
    img: "/gallery/1.jpg",
  },
  {
    id: 2,
    img: "/gallery/2.jpg",
  },
  {
    id: 3,
    img: "/gallery/3.jpg",
  },
  {
    id: 4,
    img: "/gallery/4.jpg",
  },
  {
    id: 5,
    img: "/gallery/5.jpg",
  },
  {
    id: 6,
    img: "/gallery/7.jpg",
  },

];
export function Benefits() {
  return (
    <section className="bg-white py-20 sm:py-24" id="benefits">
          <Container>
            <SectionHeading
              eyebrow="Looking back to Prime 1.0"
              title={
                <>
                  Principles of 
                  <em className="text-gold-deep"> Principles of Research & Method Essentials 2025</em>
                </>
              }
            />
              <div className="my-14 grid gap-5 sm:grid-cols-3">
              {BANNERS.map((banner, i) => (
                <Reveal key={banner.id} delay={i * 70}>
                  <article className="lift overflow-hidden rounded-3xl border border-line bg-white">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={banner.img}
                        // alt={banner.img}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
           
          </Container>
        </section>
  );
}
