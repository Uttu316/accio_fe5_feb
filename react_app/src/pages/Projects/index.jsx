import Header from "../../components/header";
import PageWrapper from "../../components/pageWrapper";
import Products from "../../components/productsList";

const Projects = (props) => {
  return (
    <PageWrapper id="projects_page" title={"Projects"}>
      <Products />
    </PageWrapper>
  );
};

export default Projects;
