import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <div>
        <Home/>
        <About/>
        <Projects /> 
      </div>
    </div>
  );
}

export default App;
