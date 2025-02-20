import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1); //async
    console.log(count);
  };
  const onMinus = () => {
    setCount(count - 1); // call the componet again with the latest value
    console.log(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onAdd}>Add</button>

      <button onClick={onMinus}>Minus</button>
    </div>
  );
};
export default Counter;
