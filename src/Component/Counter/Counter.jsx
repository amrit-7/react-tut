import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <button onClick={handleDecrement}> - </button>
      <h1>{count}</h1>
      <button onClick={handleIncrement}> + </button>
    </div>
  );
};

export default Counter;
