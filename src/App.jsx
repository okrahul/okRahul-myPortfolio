import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { PersonalProject } from "./components/PersonalProject";
import { Experience } from "./components/Experience";
import { ProfessionalWork } from "./components/ProfessionalWork";
import { Blog } from "./components/Blog";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-20">
      <Navbar />
      <Element name="hero-section">
        <HeroSection />
      </Element>
      <Element name="project">
        <PersonalProject />
      </Element>
      <Element>
        <ProfessionalWork />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="blogs">
        <Blog />
      </Element>

      {/* <ContactMe />*/}
      <Footer />
    </div>
  );
}

export default App;
