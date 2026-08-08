import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CaseStudy from "./CaseStudy";
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
      <Routes>
        <Route index element={<Home />} />
        <Route path="work/:slug" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
}