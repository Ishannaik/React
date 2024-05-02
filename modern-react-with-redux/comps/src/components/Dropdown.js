import React from "react";
import { useState } from "react";
const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event) => {
    // CLOSE THE DROPDOWN
    setIsOpen(false);
    // WHAT OPTION DID THE USER CLICK ON?
    console.log(event);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
