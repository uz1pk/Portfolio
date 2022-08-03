import './App.css';
import MainNavBar from "./Components/NavBar/MainNavBar";
import Introduction from "./Components/Introduction/Introduction"
import About from "./Components/About/About";

//import { BrowserRouter as Route, Switch, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <MainNavBar/>
      
      <Introduction/>

      <About/>
      
    </div>
  );
}

export default App;
