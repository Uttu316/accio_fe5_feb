import { Link } from "react-router";
import Header from "../../components/header";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div id="not_found_page">
      <Header title={"Hello"} />
      <div className={styles.errorContainer}>
        <h2>Oops</h2>
        <h3>Page does not Found</h3>
        <Link to="/" replace={true}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
