import { NavLink } from "react-router";
import "./header.css";

const NavItem = ({ label, to }) => {
  return (
    <li className="nav_list_item">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
};
export default NavItem;
