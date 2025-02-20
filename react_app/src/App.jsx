import AssignmentForm from "./components/assingments/form";
import Counter from "./components/counter";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header title={"Courses"} />
      <Counter />
      <AssignmentForm />
    </div>
  );
};
export default App;
