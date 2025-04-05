import React, { useState } from "react";
import "./ListManager.css"; // Import styling file

const ListManager = () => {
  const [items, setItems] = useState([]); // Store list items
  const [inputValue, setInputValue] = useState(""); // Track user input

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state when user types
  };

  const handleAddItem = () => {
    if (inputValue.trim() === "") return; // Prevent empty submissions
    setItems([...items, inputValue]); // Add item to list
    setInputValue(""); // Clear input field after adding
  };

  return (
    <div className="list-manager">
      <h2>Dynamic List Manager</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item..."
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="list-container">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager; 
