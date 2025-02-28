import Header from "../header";

const PageWrapper = ({ children, id, title }) => {
  return (
    <div id={id}>
      <Header title={title} />
      {children}
    </div>
  );
};

export default PageWrapper;
