import React from "react";
import styles from "./HistoryElm.module.css";

const HistoryElm = ({ style, name, value }) => {
  let valueColor =
    value > 0 ? { color: "rgb(0, 211, 0)" } : { color: "rgb(255, 0, 0)" };
  return (
    <div className={styles.mainContainer} style={style}>
      <p>{name}</p>
      <p style={valueColor}>${value}</p>
    </div>
  );
};

export default HistoryElm;
