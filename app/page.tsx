import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <h1 className={styles.heading}>Welcome to the Recipe Project</h1>
        <h3 className={styles.subheading}>
          We have different kind of Recipes here, please take a look!!
        </h3>
      </div>
    </>
  );
}
