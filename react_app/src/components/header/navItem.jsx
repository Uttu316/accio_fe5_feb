import { NavLink } from "react-router";
import "./header.css";

const NavItem = ({ label, to, onClick }) => {
  return (
    <li className="nav_list_item">
      <NavLink
        onClick={onClick}
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
