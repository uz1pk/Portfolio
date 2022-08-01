import NavBarIcon from "./NavBarIcon";
import "./MainNavBar.css";

function MainNavBar() {
    //Nav bar + nav bar buttons/items
    return (
        <header className="header">

            <nav className={"Nav"}>
                <NavBarIcon 
                    iconName={"About Me"}
                    sectionLink={"#aboutme"}
                />
                <NavBarIcon 
                    iconName={"Projects"}
                    sectionLink={"#projects"}
                />
            </nav>

        </header>
    );
  }
  
  export default MainNavBar;
