import { useMemo, useState } from "react";
import SomeHeavyCompute from "./SomeHeavyCompute";
const UseCallbackTh = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(90000);

  // const calculatePrime = () => {
  //   let primeCount = 0,
  //     c = 0;
  //   for (let i = 1; i <= number; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       if (i % j === 0) {
  //         c++;
  //       }
  //     }
  //     if (c === 2) {
  //       primeCount++;
  //     }
  //     c = 0;
  //   }
  //   return primeCount;
  // };

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
  },[number]);

  console.log("Front Called!");
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
      {/* below is a heavy component called in each render which is hectic */}
      <SomeHeavyCompute number={number} />
    </div>
  );
};
export default UseCallbackTh;
