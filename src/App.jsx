//NPM Packages

// Project files
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";

import Contact from "./Components/Contact";
import Modal from "./Components/Modal";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Project />
      
      <Contact />
      <Modal />
      
    </div>
  );
}
