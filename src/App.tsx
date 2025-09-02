import "./App.css";
import Headline from "./components/Headline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Header />
      <Headline />
      <Certifications />
      <Works />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
