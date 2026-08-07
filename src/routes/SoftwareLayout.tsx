import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import Experience from "../components/Experience";
import SkillsBento from "../components/SkillsBento";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function SoftwareLayout() {
  useDocumentTitle(
    "Tobiloba Adebisi, Software Engineer",
    "Software engineer building fast, reliable web applications, from real time collaboration tools to production backend systems.",
  );

  return (
    <>
      <Nav />
      <Hero />
      <ProjectsGrid />
      <SkillsBento />
       <Certifications />
      <About />
       <Experience />
      <Contact />
      <Footer />
    </>
  );
}
