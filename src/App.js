import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import About from "./components/About";
import { Gallery } from "./components/Gallery";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Research } from "./components/Research";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Gallery />
      <Projects />
      <Experience />
      <Skills />
      <Research />
      <Footer />
    </div>
  );
}

export default App;
