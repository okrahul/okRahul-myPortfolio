import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { PersonalProject } from "./components/PersonalProject";
import { Experience } from "./components/Experience";
import { ProfessionalWork } from "./components/ProfessionalWork";
import { Blog } from "./components/Blog";
import { ContactMe } from "./components/ContactMe";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

import { Element } from "react-scroll";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="w-screen min-h-screen flex flex-col gap-20 dark:bg-gray-900">
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
      <Element name="contact">
        <ContactMe />
      </Element>
      <Footer />
    </div>
    </QueryClientProvider>
  );
}

export default App;
