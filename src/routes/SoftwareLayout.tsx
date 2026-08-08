import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CaseStudy from "./CaseStudy";
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
      <Routes>
        <Route index element={<Home />} />
        <Route path="work/:slug" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
}