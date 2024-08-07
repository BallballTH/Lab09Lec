"use client";

import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

  return (
    <>
        <p>Counter: {count}</p>
        <button className = "btn btn-primary" onClick={addCount}>increse</button>
    </>
  )
}
