import React from "react";
import Loader from "react-loader-spinner";
import styles from "./loader.module.css";

function LoaderComponent() {
  return (
    <div className={styles.wrapper}>
      <Loader type="ThreeDots" color="#e095ad" height={50} width={50} />
    </div>
  );
}

export default LoaderComponent;
