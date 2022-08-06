import "./MainNavBar.css";
import "./NavBarIcon.css";

import NavBarIcon from "./NavBarIcon";

//import pdfPath from "./UsmanZaheerResume.pdf";

function MainNavBar() {
    //Nav bar + nav bar buttons/items
    return (
        <header className="header">

            <nav className="Nav">
                <NavBarIcon 
                    iconName={"Home"}
                    sectionLink={"#introduction"}
                />

                <NavBarIcon 
                    iconName={"About Me"}
                    sectionLink={"#about"}
                />
                <NavBarIcon
                    iconName={"Projects"}
                    sectionLink={"#projects"}
                />

                <a
                    className="navBarItem"
                    href="./UsmanZaheerResume.pdf"
                    target="_blank"
                >
                    <h3>Resume</h3>
                </a>
            </nav>

        </header>
    );
  }
  
  export default MainNavBar;
