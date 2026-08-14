import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import Experience from "../components/Experience";
import SkillsBento from "../components/SkillsBento";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import { useRoute } from "../hooks/useRoute";
import { useScrollToHash } from "../hooks/useScrollToHash";

export default function Home() {
  useScrollToHash();
  const { route } = useRoute();

  return (
    <>
      <div className="relative">
        <Hero />
      </div>

      <About />
      <ProjectsGrid />
      <Experience />
      <SkillsBento />
      {route === "data" && <Certifications />}
      <Contact />
    </>
  );
}
