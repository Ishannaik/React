// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyComponent from "./MyComponent";
import Event from "./Event";
import { State, State2 } from "./State";

// Get a reference to the div with ID root
const el = document.getElementById("root");

// Tell React to take control of that element
// Note: This is the updated syntax for React 18
const root = ReactDOM.createRoot(el);

// Show the component on the screen
root.render(<App />);
root.render(<MyComponent />);
root.render(<Event />);
root.render(<State />);
root.render(<State2 />);
