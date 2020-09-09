import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
