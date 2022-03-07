// Project files
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import Tech from "./Components/Tech";

// Perfect, this App does look ULTRA clean. Congrats +1

// Note, folders should be lowercase, example: assets instead of Assets.

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
