import { isLoggedIn } from "../../utils/auth";
import "./header.css";
import NavItem from "./navItem";

const Header = (props) => {
  const { title } = props;

  const isLogIn = isLoggedIn();

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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
