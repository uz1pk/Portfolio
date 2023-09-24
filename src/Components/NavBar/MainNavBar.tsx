import "./MainNavBar.css";
import "./NavBarIcon.css";
import { NavBarIcon } from "./NavBarIcon";

export function NavBar() {
    return (
        <header className="header">

            <nav className="nav">
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

                {/* <a
                    className="navBarItem"
                    href={require('./Usman_Zaheer_Resume.pdf')}
                >
                    <h3>Resume</h3>
                </a> */}
            </nav>

        </header>
    );
}
