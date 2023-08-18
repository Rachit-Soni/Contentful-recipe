"use client";
import React, { useEffect, useState } from "react";
import styles from "./ApiCalls.module.css";

const ApiCalls = () => {
  const [apiData, setApiData] = useState("posts");
  const [items, setItems] = useState([]);

  const makeAPIcall = async (apiData: any) => {
    try {
      let data = await fetch(`https://jsonplaceholder.typicode.com/${apiData}`);
      data = await data.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    makeAPIcall(apiData);
    // fetch(`https://jsonplaceholder.typicode.com/${apiData}`)
    //   .then((response) => response.json())
    //   .then((json) => setItems(json));
  }, [apiData]); //dependency array for iteration when this is changed, the useEffect will work
  return (
    <>
      <h1>API CALLS Page</h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => setApiData("posts")} className={styles.btn}>
          Posts
        </button>
        <button onClick={() => setApiData("users")} className={styles.btn}>
          Users
        </button>
        <button onClick={() => setApiData("todos")} className={styles.btn}>
          Todos
        </button>
      </div>
      <h3>{apiData}</h3>
      {items.map((item) => (
        <pre>{JSON.stringify(item, null, 2)}</pre>
      ))}
    </>
  );
};

export default ApiCalls;
