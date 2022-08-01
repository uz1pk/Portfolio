import { NavHashLink } from 'react-router-hash-link';
import "./NavBarIcon.css";

function NavBarIcon({iconName, sectionLink }) {
    return (
      <NavHashLink
        to={`/${sectionLink}`}
        className="navBarItem"

        scroll={(el) =>
          el.scrollIntoView({
            behavior: "smooth",
          })
        }
        
        >

        <h3>{iconName}</h3>

      </NavHashLink>
    );
  }
  
  export default NavBarIcon;
