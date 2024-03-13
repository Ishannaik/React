// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Get a reference to the div with ID root
const el = document.getElementById("root");

// Tell React to take control of that element
// Note: This is the updated syntax for React 18
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
  //   let message = "By There!";
  //   if (Math.random() > 0.5) {
  //     message = "Hello there!";
  //  }
  // const message = {}; //REACT DOESNT SHOW OBJECTS PROPERLY
  // const message = 123123;
  // const message = [1, 2, 3];
  // return <h1>{messages}</h1>;
  // const date = new Date();
  // const time = date.toLocaleTimeString();
  //  return <h1>{time}</h1>;
  // return <h1>{new Date().toLocaleTimeString()}</h1>;
  //   const name = "Ishan";
  //   const age = 20;
  //   return (
  //     <h1>
  //       Hi, my name is {name} and my age is {age}
  //     </h1>
  //   );
  // }
  // const inputType = "number";
  // const minValue = -5;
  // const maxValue = 10;
  // const listValue = [1, 2, 3];
  // const styleValue = { backgroundColor: "lightblue" };
  // const message = "Enter a number";
  // return (
  //   <input
  //     type={inputType}
  //     min={minValue}
  //     max={maxValue}
  //     list={listValue}
  //     style={styleValue}
  //     alt={message}
  //   />
  // );
  // return <textarea autoFocus={true} />;
  // return <input maxLength={5} />;
  return <input style={{ border: "1px solid red" }} />;
}
// Show the component on the screen
root.render(<App />);

//babeljs.io/repl
//// /* <div>
//   <h1>Hi There!</h1>
//   <ul>
//     <li>Red</li>
//     <li>Green</li>
//     <li>Blue</li>
//   </ul>
//   </div>
//    */
