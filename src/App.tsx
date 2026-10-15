import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { Mentors } from "./components/Mentors";
import { Benefits } from "./components/Benefits";
import {RegistrationCards} from "./components/RegistrationCards"
import { Footer } from "./components/Footer";
import { Partners } from "./components/Partners";

function Page() {
  return (
    <div>
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <Benefits />
        <Mentors />
        <RegistrationCards/>
        <Partners />
      </main>
      <Footer />

      </div>
    
  );
}

export default function App() {
  return <Page />;
}
