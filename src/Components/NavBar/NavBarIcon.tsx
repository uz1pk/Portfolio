import { NavHashLink } from 'react-router-hash-link';
import "./NavBarIcon.css";

type Props = {
  iconName: string,
  sectionLink: string,
}

function NavBarIcon({ iconName, sectionLink }: Props) {
  return (
<NavHashLink
    to={`/${sectionLink}`}
    className="navBarItem"

    scroll={(x) =>
      x.scrollIntoView({
        behavior: "smooth",
      })
    }
  >

    <h3>{iconName}</h3>

  </NavHashLink>
  );
  
}
  
export default NavBarIcon;
