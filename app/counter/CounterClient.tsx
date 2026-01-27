"use client";

import React, { useState } from 'react';

interface Props {
  initialValue: number;
}

const CounterClient = ({ initialValue }: Props) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default CounterClient