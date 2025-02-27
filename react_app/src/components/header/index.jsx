import { isLoggedIn } from "../../utils/auth";
import "./header.css";
import NavItem from "./navItem";

const Header = (props) => {
  const { title } = props;

  const isLogIn = isLoggedIn();

  const onLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <header className="header">
      <p className="logo">{title}</p>

      <nav>
        <ul className="nav_list">
          <NavItem to={"/"} label={"Home"} />
          {!isLogIn && <NavItem to={"/login"} label={"Signin"} />}
          {isLogIn && (
            <>
              <NavItem to={"/topics"} label={"Topics"} />
              <NavItem to={"/projects"} label={"Projects"} />
              <NavItem to={"/assignments"} label={"Assignments"} />
              <NavItem to={"/login"} onClick={onLogout} label={"Signout"} />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
