import { useEffect } from "react";
import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Content from "./components/Content";
import './css/custom.min.css'
import './css/main.css'
import './css/handset.css'
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
function App() {

  useEffect(() => {
    if (window.confirm('Hii :) Thanks for visiting my Portfolio. But this is the old one :/\nClick "OK" to go to my latest portfolio!!')) {
      window.location.href = "https://pooranjoyb.tech/"
    }
  }, [])
  
  return (

    <>
      <ParticleBackground/>
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
