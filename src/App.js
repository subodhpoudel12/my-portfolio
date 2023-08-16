import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Skill/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
