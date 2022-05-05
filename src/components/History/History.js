import React, { useContext } from "react";
import styles from "./History.module.css";
import HistoryElm from "./HistoryElm/HistoryElm";
import GlobalContext from "../../GlobalContext";

const History = ({ style }) => {
  let [Global, updateGlobal] = useContext(GlobalContext);
  // console.log("Inside History DIv :  ", Global);
  let historyHtml = [];
  for (let i = 0; i < Global.history.length; i++) {
    // for (let i = 0; i < 5; i++) {
    historyHtml.push(
      <HistoryElm
        name={Global.history[i].text}
        value={Global.history[i].amount}
        id={Global.history[i].id}
        key={historyHtml.length}
      />
    );
    // console.log("History Html is :    ", historyHtml);
  }

  return (
    <div className={styles.mainContainer} style={style}>
      <h2 className={styles.heading}>History</h2>
      <div>{historyHtml}</div>
    </div>
  );
};

export default History;
