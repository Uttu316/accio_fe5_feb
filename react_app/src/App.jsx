import ClassCounter from "./components/classCounter";
import ClassicBall from "./components/classicBall";
import Assignments from "./pages/Assignments";

const App = () => {
  return (
    <div>
      <Assignments />
      <ClassCounter start={10} />
      <ClassicBall />
    </div>
  );
};
export default App;
