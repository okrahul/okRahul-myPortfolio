import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { PersonalProject } from "./components/PersonalProject";
import { Experience } from "./components/Experience";
import { ProfessionalWork } from "./components/ProfessionalWork";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-20">
      <Navbar />
      <HeroSection />
      <PersonalProject />
      <ProfessionalWork />
      <Experience />
      {/* <Blog /> */}
      {/* <ContactMe />*/}
      <Footer />
    </div>
  );
}

export default App;
