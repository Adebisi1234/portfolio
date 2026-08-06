import Hero from "../components/Hero";
import ProjectsBento from "../components/ProjectsBento";
import Experience from "../components/Experience";
import SkillsBento from "../components/SkillsBento";
import Certifications from "../components/Certifications";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function DataLayout() {
  useDocumentTitle(
    "Tobiloba Adebisi, Data Engineer",
    "Data engineer designing serverless pipelines and streaming systems that turn raw data into decisions.",
  );

  return (
    <>
      <Nav />
      <Hero />
      <ProjectsBento />
      <Experience />
      <SkillsBento />
      <Certifications />
      <Footer />
    </>
  );
}