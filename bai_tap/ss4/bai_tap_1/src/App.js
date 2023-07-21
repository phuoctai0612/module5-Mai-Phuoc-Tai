import React, { useState } from 'react';
import './App.css';
export function useIncrement(addMount) {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((previous) => previous + addMount)
  }
  return [count,increase]
}
