import { useState } from "react";

function App() {
  // Array Destructuring
  // function makeArray() {
  //   return [1, 10, 32, 40];
  // }

  // // const myArray = makeArray();
  // // const firstElement = myArray[0];
  // // const secondElement = myArray[1];
  // // console.log(firstElement, secondElement);
  // const [firstElement, secondElement] = makeArray();
  // console.log(firstElement, secondElement);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of Animals: {count}</div>
    </div>
  );
}

export default App;
