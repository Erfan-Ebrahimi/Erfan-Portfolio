import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <div className="sec">
        <Home/>
        <About/>
        <Skills/> 
        <Projects />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
