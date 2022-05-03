import React from "react";
import styles from "./Balance.module.css";

const Balance = ({ style }) => (
  <div className={styles.mainDiv} style={style}>
    <p>YOUR BALANCE : </p>
    <p className={styles.money}>$250</p>
  </div>
);

export default Balance;
