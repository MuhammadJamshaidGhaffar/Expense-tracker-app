import React, { useContext } from "react";
import styles from "./Balance.module.css";
import GlobalContext from "../../GlobalContext";

const Balance = ({ style }) => {
  let [{ balance }] = useContext(GlobalContext);
  let valueColor =
    balance >= 0 ? { color: "rgb(0, 211, 0)" } : { color: "rgb(255, 0, 0)" };
  return (
    <div className={styles.mainDiv} style={style}>
      <p>YOUR BALANCE : </p>
      <p className={styles.money} style={valueColor}>
        ${balance}
      </p>
    </div>
  );
};

export default Balance;
