import { useState } from "react";
import First from "./firstcompo";

function Third() {
  const [counter, setcounter] = useState(0);
  function clickevent() {
    setcounter(counter + 1);
  }
  return (
    <div>
      <First />
      <h1>i am in third</h1>
      <button onClick={clickevent}>click me</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default Third;
