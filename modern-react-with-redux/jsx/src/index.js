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
  //// const message = {}; //REACT DOESNT SHOW OBJECTS PROPERLY
  ////// const message = 123123;
  const message = [1, 2, 3];
  return <h1>{message}</h1>;
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
