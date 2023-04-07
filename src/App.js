import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from './Components/about';
import Project from './Components/project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
     <About/> 
     <Project/>
    </div>
  );
}

export default App;
