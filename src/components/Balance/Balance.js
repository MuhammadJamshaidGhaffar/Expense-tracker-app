import React, { useContext } from "react";
import styles from "./Balance.module.css";
import GlobalContext from "../../GlobalContext";

const Balance = ({ style }) => {
  let [{ balance }] = useContext(GlobalContext);
  return (
    <div className={styles.mainDiv} style={style}>
      <p>YOUR BALANCE : </p>
      <p className={styles.money}>${balance}</p>
    </div>
  );
};

export default Balance;
