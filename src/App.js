import './App.css';
import MainNavBar from "./Components/NavBar/MainNavBar";
import Introduction from "./Components/Introduction/Introduction"

//import { BrowserRouter as Route, Switch, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <MainNavBar/>
      
      <Introduction/>
      
    </div>
  );
}

export default App;
