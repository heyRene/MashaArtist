import { AboutSection } from "@/sections/About/About";
import Intro from "@/sections/IntroSection/Intro";


export default function Home() {
  return (
    <div>
      <main className="main">
       <Intro/>
       <AboutSection/>
      </main>
    </div>
  );
}
