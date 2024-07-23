"use client";
import { useState } from "react";

type CounterType = {
  count: number;
};
export default function Counter({ count }: CounterType) {
  const [initCount, setInitCount] = useState(count);
  const [inputValue, setInputValue] = useState(0);
  const changeHandler = (event: any) => {
    setInputValue(Number(event.target.value));
  };
  const addHandler = () => {
    setInitCount(initCount + inputValue);
  };
  const minusHandler = () => {
    if (initCount === 0 || inputValue === 0) return;
    setInitCount(initCount - inputValue);
  };
  const resetHandler = () => {
    setInitCount(count);
    setInputValue(count);
  };
  return (
    <>
      <h1>Counter App</h1>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button onClick={addHandler}>Add</button>
      <button onClick={minusHandler}>Minus</button>
      <button onClick={resetHandler}>Reset</button>
      <h3>{initCount}</h3>
    </>
  );
}
