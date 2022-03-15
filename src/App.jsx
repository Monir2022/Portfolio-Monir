// Project files
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import Tech from "./Components/Tech";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Tech />
      <Footer />
    </div>
  );
}
