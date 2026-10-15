import { Container, Reveal, SectionHeading } from "./ui";

const MENTORS = [
  {
    name: "Prof. Dr. Mahfuzur Rahman",
    title: "Convenor",
    bio: "Dean, School of Engineering and Technology, Counselor, IEEE EUSB.",
    img: "/teacher/Dean_Sir.jpg",
  },
  {
    name: "Assistant Prof. Md. Maidul Islam",
    title: "Management Chair",
    bio: "Coordinator & Mentor, IEEE EUSB. Associate Professor, Department of EEE, Eastern University",
    img: "/teacher/Maidul_sir.jpeg",
  },
  {
    name: "Associate Prof. Tazeen Tasneem",
    title: "Organising Chair",
    bio: "Advisor, IEEE CS EU SBC  Associate Professor, Department of CSE    Eastern University",
    img: "/teacher/Tazeen_Maam.png",
  },
  {
    name: "Momtaj Hossain Mow",
    title: "Technical Chair",
    bio: "Treasurer, IEEE WIE AG BDS  Advisor, IEEE WIE EUSB AG Program Co-Ordinator and Lecturer Department of CSE, Eastern University",
    img: "/teacher/Mow_Maam.jpg",
  },
  
  
];

const SUPPORTERS = [
  {
    name: "Jahidul Islam Rifat",
    title: "Chief Management Executive Officer",
    bio: "Chairperson, IEEE EUSB. Department of EEE",
    img: "/members/MD_Jahidul_Islam.jpg",
  },
  {
    name: "Turjo Saha",
    title: "Chief Organising Executive Officer",
    bio:  "Chairperson, IEEE CS EUSBC. Department of CSE",
    img: "/members/Turjo_Saha.jpg",
  },
  {
    name: "Md. Abir Hasan",
    title: "Chief Operation Executive Officer",
    bio: "Vice-Chair, IEEE CS EUSBC.   Department of CSE",
    img: "/members/Md_Abir_Hasan.jpg",
  },
  
];
const DEVELOPERS = [
  {
    name: "Ataur Rahman Nadim",
    title: "Campus Ambassadors Executive Officer",
    bio: "Membership Development Associate. IEEE CS EUSBC. Department of CSE",
    img: "/members/Md_Ataur_Rahman.jpg",
  },

];

export function Mentors() {
  return (
    <section className="bg-white py-20 sm:py-24" id="mentors">
      <Container>
        <SectionHeading
          eyebrow="Faculties who are guiding "
          title={
            <>
              Meet the
              <em className="text-gold-deep"> Organizers</em>
            </>
          }
          // subtitle="Clinics are led by researchers who publish, review, and sit on ethics boards — not by generic course hosts."
        />
        {/* Mentors */}
          <div className="my-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MENTORS.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <article className="lift overflow-hidden rounded-3xl border border-line bg-white">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-navy">{m.name}</h3>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      {m.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                    {m.bio.split(".").map((sentence, index, arr) => (
                    <span key={index}>
                      {sentence.trim()}
                      {sentence.trim() ? " " : " "}
                      {index < arr.length - 1 && <br />}
                    </span>
                    ))}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        <SectionHeading
          eyebrow="The Supporters"
          title={
            <>
              Meet the
              <em className="text-gold-deep"> Organizers </em>
            </>
          }
          // subtitle="Clinics are led by researchers who publish, review, and sit on ethics boards — not by generic course hosts."
        />
        {/* Supporters */}
        <div className="my-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORTERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <article className="lift overflow-hidden rounded-3xl border border-line bg-white">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-navy">{m.name}</h3>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    {m.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                    {m.bio.split(".").map((sentence, index, arr) => (
                    <span key={index}>
                      {sentence.trim()}
                      {sentence.trim() ? " " : " "}
                      {index < arr.length - 1 && <br />}
                    </span>
                    ))}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {/* Developers */}
        <SectionHeading
          eyebrow="The Developers"
          title={
            <>
              Meet the 
              <em className="text-gold-deep"> Organizers </em>
            </>
          }
          // subtitle="Clinics are led by researchers who publish, review, and sit on ethics boards — not by generic course hosts."
        />
        <div className="my-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEVELOPERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <article className="lift overflow-hidden rounded-3xl border border-line bg-white">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-navy">{m.name}</h3>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    {m.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                    {m.bio.split(".").map((sentence, index, arr) => (
                    <span key={index}>
                      {sentence.trim()}
                      {sentence.trim() ? " " : " "}
                      {index < arr.length - 1 && <br />}
                    </span>
                    ))}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
