// import Button from "./components/Button";
// import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import "./index.css";
import Accordion from "./components/Accordion.js";
function App() {
  const items = [
    {
      label: "What is React?",
      content: "React is a front-end JavaScript framework.",
    },
    {
      label: "Why use React?",
      content: "React allows you to create reusable UI components.",
    },
    {
      label: "How do you use React?",
      content: "You use React by creating components.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
