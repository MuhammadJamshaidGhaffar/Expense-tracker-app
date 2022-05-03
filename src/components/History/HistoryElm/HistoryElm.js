import React from "react";
import styles from "./HistoryElm.module.css";

const HistoryElm = ({ style, name, value }) => (
  <div className={styles.mainContainer}>
    <p>{name}</p>
    <p>{value}</p>
  </div>
);

export default HistoryElm;
