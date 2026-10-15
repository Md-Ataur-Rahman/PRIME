import Marquee from "react-fast-marquee";
import { Container, Reveal } from "./ui";
const images = [
  {
    id: 1,
    image: "/partners/Ieee_Eu.png"
  },
  {
    id: 2,
    image: "/partners/eu_CS.png"
  },
  {
    id: 3,
    image: "/partners/WIE.png"
  },
  {
    id: 4,
    image: "/partners/EU.png"
  },
]


export function SocialProof() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-navy-muted">
            Organized By
          </p>
        </Reveal>
      </Container>

      <Marquee>
          {
            images.map((item,i) => <div key={i} className="w-[200px] h-[200px] mx-5">
            <img src={item.image} alt="" className="w-full h-full"/>
            </div>)
            }
            </Marquee>
    </section>
  );
}
