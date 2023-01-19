import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <div className="co">
        <Home/>
        
      </div>
    </div>
  );
}

export default App;
