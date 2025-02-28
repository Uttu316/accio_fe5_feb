import { Link } from "react-router";
import Header from "../../components/header";
import styles from "./notFound.module.css";
import PageWrapper from "../../components/pageWrapper";

const NotFound = () => {
  return (
    <PageWrapper id="not_found_page" title={"Hello"}>
      <div className={styles.errorContainer}>
        <h2>Oops</h2>
        <h3>Page does not Found</h3>
        <Link to="/" replace={true}>
          Go to Home
        </Link>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
