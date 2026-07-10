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

      <SectionBar />
      <div id="projects">
        <Projects />
      </div>

      <SectionBar/>
      <Skills />

      <SectionBar/>
      <About />

      <SectionBar/>
      <Contact />

      <Footer />
    </div>
  );
}
