import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Proyects } from "./components/Proyects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Proyects />
    </div>
  );
}

export default App;
