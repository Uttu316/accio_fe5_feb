import Header from "./components/header";
import "./App.css";
const App = () => {
  return (
    <div className="resume_body">
      <Header />

      <h2>I am Utkarsh</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro,
        tempore dolore molestias dignissimos illo, aliquid odio corrupti quae
        voluptas soluta. Consequuntur aliquam, nulla quam quia sunt sed qui
        excepturi.
      </p>

      <ul>
        <li>
          <h3> Skills</h3>
          <hr />
          <ul>
            <li>React</li>
            <li>Js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Jquery</li>
            <li>DS & Algo</li>
          </ul>
        </li>
        <li>
          <h3>Expirence</h3>
        </li>
      </ul>
    </div>
  );
};

export default App;
