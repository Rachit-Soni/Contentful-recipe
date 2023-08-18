"use client";
import React, { useState } from "react";

function Tes() {
  const [inputData, setInputData] = useState(new Array(50).fill(""));

  const handleInputChange = (index, event) => {
    const updatedData = [...inputData];
    updatedData[index] = event.target.value;
    setInputData(updatedData);
  };

  const handleCaptureData = () => {
    console.log("Captured Data:", inputData);
  };

  //Map Function
  const numbers = [1, 2, 3, 4, 5];
  numbers.map((i) => {
    return console.log("mapped values:", i * 2);
  });

  //Filter Function
  const filterNumbers = [10, 5, 25, 8, 15];
  const greatestNumber = filterNumbers.filter((number) => {
    return number === Math.max(...filterNumbers); // Filtering for numbers equal to the maximum in the array
  });

  console.log("Greatest number:", greatestNumber); // Should output [25]

  return (
    <div>
      {inputData.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(event) => handleInputChange(index, event)}
          placeholder={`Input ${index + 1}`}
        />
      ))}
      <button onClick={handleCaptureData}>Capture Data</button>
    </div>
  );
}

export default Tes;
