"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button><br />
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

export default Counter;
