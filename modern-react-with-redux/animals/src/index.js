import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AnimalShow from "./AnimalShow";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
root.render(<AnimalShow />);
