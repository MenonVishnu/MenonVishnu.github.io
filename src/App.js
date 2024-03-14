import logo from "./logo.svg";
import Navbar from "./Components/navbar";
import "./App.css";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Project />
      <Experience />
    </div>
  );
}

export default App;
