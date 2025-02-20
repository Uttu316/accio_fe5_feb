import "./header.css";

const Header = (props) => {
  const { title } = props;

  return (
    <header className="header">
      <p className="logo">{title}</p>

      <nav>
        <ul className="nav_list">
          <li className="nav_list_item">Home</li>
          <li className="nav_list_item">Topics</li>
          <li className="nav_list_item">Projects</li>
          <li className="nav_list_item">Assignments</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
