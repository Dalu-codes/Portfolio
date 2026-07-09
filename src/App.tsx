import Hero from "./components/Hero";
import SectionBar from "./components/SectionBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Hero />

      <SectionBar leftLabel="PROJECTS" />
      <div id="projects">
        <Projects />
      </div>

      <SectionBar leftLabel="SKILLS" id="skills-bar" />
      <Skills />

      <SectionBar leftLabel="ABOUT" id="about" />
      <About />

      <SectionBar leftLabel="CONTACT" id="contact" />
      <Contact />

      <Footer />
    </div>
  );
}
