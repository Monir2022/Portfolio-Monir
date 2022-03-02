//NPM Packages

// Project files
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";


import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Modal from "./Components/Modal";

import Tech from "./Components/Tech";


export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Project/>
      <Modal/>
      <Tech/>
      
     
      
      <Contact />
     
      
    </div>
  );
}
