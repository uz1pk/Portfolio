import "./MainNavBar.css";

import NavBarIcon from "./NavBarIcon";

import "./NavBarIcon.css"

import { Link } from "react-router-dom";



//Update this for whichever resume you're going to use
import pdfPath from "./UsmanZaheerResume.pdf"

function MainNavBar() {
    //Nav bar + nav bar buttons/items
    return (
        <header className="header">

            <nav className="Nav">
                <NavBarIcon 
                    iconName={"Home"}
                    sectionLink={"#start"}
                />

                <NavBarIcon 
                    iconName={"About Me"}
                    sectionLink={"#about"}
                />
                <NavBarIcon
                    iconName={"Projects"}
                    sectionLink={"#projects"}
                />

                <Link
                    className="navBarItem"
                    to={pdfPath}
                    target="_blank"
                    >
                    <h3>Resume</h3>
                </Link>
            </nav>

        </header>
    );
  }
  
  export default MainNavBar;
