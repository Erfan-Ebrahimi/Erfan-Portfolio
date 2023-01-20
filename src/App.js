import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <div className="co">
        <Home/>
        <Projects /> 

      </div>
    </div>
  );
}

export default App;
