import React from "react";
import "./Counter.css";
const Counter = (props) => {
  const { count, handleadd, handleMinus } = props;
  console.log(props);
  return (
    <div className="name">
      <h1>Count: {count}</h1>
      <button onClick={handleadd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
};

export default Counter;
