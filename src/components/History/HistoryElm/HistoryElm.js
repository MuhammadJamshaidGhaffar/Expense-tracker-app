import React, { useContext } from "react";
import styles from "./HistoryElm.module.css";
import GlobalContext from "../../../GlobalContext";

const HistoryElm = ({ style, name, value, id }) => {
  let valueColor =
    value > 0 ? { color: "rgb(0, 211, 0)" } : { color: "rgb(255, 0, 0)" };
  let [, updateGlobalContext] = useContext(GlobalContext);
  return (
    <div className={styles.mainContainer} style={style}>
      <p>{name}</p>
      <div className={styles.valueBtnWrapper}>
        <p style={valueColor}>{value > 0 ? "+$" + value : "-$" + value * -1}</p>
        <button
          className={styles.deleteBtn}
          onClick={() => {
            updateGlobalContext({
              text: name,
              amount: value,
              type: "delete",
              id: id,
            });
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default HistoryElm;
