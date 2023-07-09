import "./MainNavBar.css";
import "./NavBarIcon.css";

import NavBarIcon from "./NavBarIcon";

function MainNavBar() {
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

                <NavBarIcon
                    iconName={"Contact Me"}
                    sectionLink={"#end-page"}
                />
                <a
                    className="navBarItem"
                    href={require('./Usman_Zaheer_Resume.pdf')}
                >
                    <h3>Resume</h3>
                </a>
            </nav>

        </header>
    );
  }
  
  export default MainNavBar;
