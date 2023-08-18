"use client";
import { useState, useRef } from "react";
import NameBlockComponent from "./NameBlockComponent";

const Todos = () => {
  //for todos
  const [todos, setTodos] = useState([]);
  const [inputString, setInputString] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  //for TODOS
  const handleInputSubmit = (event: any) => {
    setInputString(event.target.value);
  };

  const handleTodos = () => {
    if (inputString.trim() !== "") {
      setTodos([...todos, inputString]);
      setInputString("");
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="TodoPractice">
        <input
          onChange={handleInputSubmit}
          placeholder="Type Something..."
          ref={inputRef}
        ></input>
        <button onClick={handleTodos}>Add</button>
        <div>
          {todos.map((item, index) => (
            <NameBlockComponent item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
