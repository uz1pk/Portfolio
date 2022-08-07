import './App.css';

import MainNavBar from "./Components/NavBar/MainNavBar";
import Introduction from "./Components/Introduction/Introduction"
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import EndPage from './Components/EndPage/EndPage';

//import { BrowserRouter as Route, Switch, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <MainNavBar/>
      
      <Introduction/>

      <About/>

      <Projects/>
      
      <EndPage/>
      
    </div>
  );
}

export default App;
