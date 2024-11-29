import "./App.css";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Works />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
