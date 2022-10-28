import Navbar from "./Components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Content from "./Components/Content";
import './css/custom.min.css'
import './css/main.css'
import Skillset from "./Components/Skillset";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (

    <>
      <div id="main">
      <Navbar/>
      <Content/>
      <Skillset/>
      <Projects/>
      <Contact/>
      <footer>
        <div>
        Designed and Developed by Pooranjoy Bhattacharya
        </div>
        <div>
        Copyright © 2022
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;
