import { useState } from "react";
function getRandomAnimal() {
  const animals = ["cat", "dog", "fish", "bird"];
  return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRandomAnimal());

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

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
