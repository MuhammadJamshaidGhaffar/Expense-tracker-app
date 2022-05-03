import React from "react";
import styles from "./AddItem.module.css";

const AddItem = ({ style }) => (
  <div style={style} className={styles.mainContainer}>
    <h2 className={styles.heading}>Add New Transaction</h2>
    <label className={styles.label}>Text</label>
    <input type="text" placeholder="Enter Text"></input>
  </div>
);

export default AddItem;
