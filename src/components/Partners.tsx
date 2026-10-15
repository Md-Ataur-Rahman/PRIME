import Marquee from "react-fast-marquee";
import { Container, Reveal } from "./ui";
const images = [
  {
    id: 1,
    image: "uni_partners/Blue_RUSB.png"
  },
  {
    id: 2,
    image: "uni_partners/IEEE_BUP.png"
  },
  {
    id: 3,
    image: "uni_partners/IEEE_CS_IEEE_CS_BUBT_SB_Chapter.png"
  },

  {
    id: 4,
    image: "uni_partners/IEEE_DIU_SB_WIE_AFFINITY_GROUP.jpg"
  },
  {
    id: 5,
    image: "uni_partners/IEEE_IIUC.jpeg"
  },
  {
    id: 6,
    image: "uni_partners/IEEE_PES_DIU_Student_Branch_Chapter.jpg"
  },
  {
    id: 7,
    image: "uni_partners/IEEE_PES_IIUC.png"
  },
  {
    id: 8,
    image: "uni_partners/IEEE_SB_IEEE_Student_Branch_GUB.png"
  },
  {
    id: 9,
    image: "uni_partners/IEEE_SIGHT_DIU.png"
  },
  {
    id: 10,
    image: "uni_partners/IEEESB_Logo_IEEE_IUBAT_Student_Branch.png"
  },
  {
    id: 11,
    image: "uni_partners/logo_CS_EEE_CS_BUBT_SB_Chapter.png"
  },
  {
    id: 12,
    image: "uni_partners/PUBLIC_HEALTH_EU.jpg"
  },
  {
    id: 13,
    image: "uni_partners/VAC_LOGO_Visual_Archive_Club.png"
  }, 
  {
    id: 14,
    image: "uni_partners/wie_final_logo_RU.jpg"
  },
]


export function Partners() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-navy-muted py-8">
            Collaborated By
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
