import { useCallback, useMemo, useState } from "react";
import SomeHeavyCompute from "./SomeHeavyCompute";
import TestingComponent from "./TestingComponent";
const UseCallbackTh = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);

  //for usecallback:here we are memoizing the function so that it doesn't get recreated on each render
  const increaseValForCallback = useCallback(() => {
    console.log("Current count value is:", count);
  }, [count]);

  // general usecase of usecallback:
  // suppose a child component which is using react.memo to avoid re-rendering on each parent render
  // but the child component also receives a function as prop from parent
  // now on each parent render the function gets recreated and passed to child as new prop
  // so react.memo will not help here as props are changed (function reference is changed)
  // to avoid this we can use usecallback to memoize the function so that it retains the same reference
  // unless its dependencies change

  // Memoizing the heavy compute function to avoid re-computation on every render
  const prime = useMemo(() => {
    let primeCount = 0,
      c = 0;
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
          c++;
        }
      }
      if (c === 2) {
        primeCount++;
      }
      c = 0;
    }
    return primeCount;
  }, [number]);

  console.log("Front Called!");

  //object to demonstrate use of React.memo with non-primitive props
  const object = useMemo(() => {
    return {
      name: "Prash",
      age: 20,
    };
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 bg-neutral-950 text-white">
      <h2>Count: {count}</h2>
      <button
        className="cursor-pointer rounded-lg bg-white px-4 py-1 font-medium text-black"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <h2>Number: {number}</h2>
      <button
        className="cursor-pointer rounded-lg bg-white px-4 py-1 font-medium text-black"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Increment
      </button>
      <h3>Total number of Prime number:{prime}</h3>

      {/* for demostration of usecallback */}
      <button
        className="cursor-pointer rounded-lg bg-white px-4 py-1 font-medium text-black"
        onClick={increaseValForCallback}
      >
        Call useCallback function
      </button>

      {/* below is a heavy component called in each render which is hectic */}
      <SomeHeavyCompute number={number} />
      {/* here it seems like proprs is static and the component should be rendered as it is memoized withe react.memo but object is non-primitive and known througn it's reference */}

      <TestingComponent value={object} />
    </div>
  );
};
export default UseCallbackTh;
