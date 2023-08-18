"use client";
import { useState, useRef } from "react";
import styles from "./Playground.module.css";
import RefandStatePractice from "./RefandStatePractice";
import Todos from "./Todos";

const Playground = () => {
  return (
    <>
      <h1>Playground Area</h1>
      <RefandStatePractice />
      <Todos />
    </>
  );
};

export default Playground;
