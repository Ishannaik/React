import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Green", value: "green" },
    { label: "A Shade of Blue", value: "blue" },
  ];
  return <Dropdown options={options} />;
}

export default App;
