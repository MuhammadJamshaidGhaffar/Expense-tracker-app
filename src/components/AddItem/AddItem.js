import React from "react";
import styles from "./AddItem.module.css";

const AddItem = ({ style }) => (
  <div style={style} className={styles.mainContainer}>
    <h2 className={styles.heading}>Add New Transaction</h2>
    <div className={styles.inputWrapper}>
      <input
        class={styles.input}
        id="text"
        type="text"
        placeholder="Enter Text"
      />
      <div className={styles.numberInputWrapper}>
        <input
          class={styles.input}
          id="amount"
          type="number"
          placeholder="Enter Amount"
        />
        <p>-ve for Expense and +ve for Income</p>
      </div>
    </div>
    <button className={styles.addBtn}>Add Transaction</button>
  </div>
);

export default AddItem;
