import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  function negativebtnclick() {
    setcount(count - 1);
  }
  function positiebtnclick() {
    setcount(count + 1);
  }

  function resetbtnhandler() {
    setcount(0);
  }
  return (
    <div className="Container">
      <h1>Increament And Decrement</h1>
      <button className="negativebtn" onClick={negativebtnclick}>
        -
      </button>
      <p>{count}</p>
      <button className="positivebtn" onClick={positiebtnclick}>
        +
      </button>
      <button onClick={resetbtnhandler}>Reset</button>
    </div>
  );
}

export default Counter;
