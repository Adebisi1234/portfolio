// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Field from "./components/Field";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Field />
      <Skills />
      <Projects />
      <Works />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
