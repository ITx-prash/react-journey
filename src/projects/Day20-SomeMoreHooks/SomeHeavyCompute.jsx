import React from "react";

const SomeHeavyCompute = React.memo(({ number }) => {
  const naturalSum = () => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  };

  console.log("Heavy Called!");
  return (
    <>
      <div className="flex flex-col items-center gap-4 rounded-md bg-white p-4 text-black">
        <h3 className="font-bold underline">
          I'm Heavy computational compont ig
        </h3>

        <p className="">The sum is {naturalSum()}</p>
      </div>
    </>
  );
});

export default SomeHeavyCompute;
