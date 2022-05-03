import React from "react";
import styles from "./History.module.css";
import HistoryElm from "./HistoryElm/HistoryElm";

const History = ({ style }) => (
  <div>
    <h2>History</h2>
    <div>
      <HistoryElm name="Book" value="200" />
    </div>
  </div>
);

export default History;
