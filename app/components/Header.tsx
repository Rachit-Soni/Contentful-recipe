import React from "react";
import Link from "@/node_modules/next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/api-calls">API Calls</Link>
          </li>
          <li>
            <Link href="/playground">Playground</Link>
          </li>
          <li>
            <Link href="/tes"> Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
