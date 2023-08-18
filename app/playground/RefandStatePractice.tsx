import { useState, useRef } from "react";
import styles from "./Playground.module.css";

export default function () {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  const [css, setCss] = useState("");

  //   const toggleVisibility = () => {
  //     setIsVisible((prevVisible) => !prevVisible);
  //   };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    console.log("REF VALUES", inputRef.current);
    inputRef.current?.focus(); // Access the current property of the ref to get the DOM node
  };

  const loseFocus = () => {
    inputRef.current?.blur();
  };

  const handleInputChange = (e: any) => {
    console.log("Submit value:", e.target.value);
    setValue(e.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input value
      setValue(""); // Update the state value
    }
  };
  const removeStyle = () => {
    setCss("removeCSS");
  };
  return (
    <>
      {" "}
      <div className={styles.cardContainer}>
        {isVisible && (
          <div className={`${styles.card} ${css}`}>
            <h2 className={styles.cardTitle}>Hello! I am a Card!</h2>
            <p className={styles.cardContent}>
              A small description for the card in use
            </p>
          </div>
        )}
        {/* <div className={styles.card}>Card 2</div> */}
      </div>
      <div className={styles.controlBtns}>
        <button onClick={() => setIsVisible(true)} className={styles.button}>
          Show Card
        </button>
        <button onClick={() => setIsVisible(false)} className={styles.button}>
          Hide Card
        </button>
        <button
          onClick={() => setCss(styles.applyCss)}
          className={styles.button}
        >
          Add CSS to Cards
        </button>
        <button onClick={removeStyle}>Remove CSS from Card</button>
      </div>
      <div className={styles.refContainer}>
        <h2>Ref Hook Practice</h2>
        <div className="inputContainer">
          <input
            className={styles.inputField}
            ref={inputRef}
            type="text"
            placeholder="Between 5 and 20 Characters"
            onChange={handleInputChange}
            maxLength={20}
            minLength={5}
          ></input>
          <button onClick={focusInput}>Focus Input</button>
          <button onClick={loseFocus}>Lose Focus</button>
          <button onClick={clearInput}>Clear Values</button>
          <h4>Entered Value is: {value}</h4>
        </div>
      </div>
    </>
  );
}
