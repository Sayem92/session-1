import { useState } from "react";
import "./App.css";
import AllGun from "./Components/AllGun/AllGun";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Navbar count={count} />
      <AllGun countIncrease={countIncrease} />
    </div>
  );
}
export default App;
