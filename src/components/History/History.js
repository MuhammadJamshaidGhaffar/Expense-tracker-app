import React from "react";
import styles from "./History.module.css";
import HistoryElm from "./HistoryElm/HistoryElm";

const History = ({ style }) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.heading}>History</h2>
      <div>
        <HistoryElm name="Salary" value={200} />
        <HistoryElm name="Car" value={-160} />
        <HistoryElm name="2nd Salary" value={160} />
        <HistoryElm name="Pencil" value={-20} />
      </div>
    </div>
  );
};

export default History;
