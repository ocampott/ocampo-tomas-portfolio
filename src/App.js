import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
