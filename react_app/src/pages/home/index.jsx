import { useState } from "react";
import Header from "../../components/header";
import Timer from "../../components/timer";

const Home = () => {
  const [showTimer, setShowTimer] = useState(true);
  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };
  return (
    <div id="home_page">
      <Header title={"Hello"} />
      <button onClick={toggleTimer}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

export default Home;
