import { NavHashLink } from 'react-router-hash-link';
import "./NavBarIcon.css";

export interface NavBarIconProps {
  iconName: string,
  sectionLink: string,
}

export function NavBarIcon({ iconName, sectionLink }: NavBarIconProps) {
  return (
    <NavHashLink
      to={`/${sectionLink}`}
      className="nav-bar-item"

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
