import React from "react";
const TestingComponent = React.memo(({ value }) => {
  console.log("the testing rendered");

  return (
    <div>
      My name is {value.name} and age is {value.age}
    </div>
  );
});
export default TestingComponent;
