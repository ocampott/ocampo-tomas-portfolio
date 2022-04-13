import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutMe/>
    </div>
  );
}

export default App;
