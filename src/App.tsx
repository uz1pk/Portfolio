import './App.css';
import { NavBar } from "./Components/NavBar/MainNavBar";
import { Introduction } from "./Components/Introduction/Introduction"
import { About } from "./Components/About/About";
import { ProjectsSection } from "./Components/Projects/Projects";
import { EndPage } from './Components/EndPage/EndPage';

export function App() {
  return (
    <div className="App">

      <NavBar />

      <Introduction />

      <About />

      <ProjectsSection />

      <EndPage />

    </div>
  );
}
