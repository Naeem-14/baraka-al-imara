import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projets from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Hero />
      <Services />
      <Projets />
      <About />
      <Footer />
    </main>
  );
}

export default App;
