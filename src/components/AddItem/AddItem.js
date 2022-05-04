import React, { useContext } from "react";
import styles from "./AddItem.module.css";
import GlobalContext from "../../GlobalContext";

const AddItem = ({ style }) => {
  let [Global, updateGlobal] = useContext(GlobalContext);
  return (
    <div style={style} className={styles.mainContainer}>
      <h2 className={styles.heading}>Add New Transaction</h2>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          id="text"
          type="text"
          placeholder="Enter Text"
        />
        <div className={styles.numberInputWrapper}>
          <input
            className={styles.input}
            id="amount"
            type="number"
            placeholder="Enter Amount"
          />
          <p>-ve for Expense and +ve for Income</p>
        </div>
      </div>
      <button
        className={styles.addBtn}
        onClick={() => {
          updateGlobal({
            amount: parseInt(document.getElementById("amount").value),
            text: document.getElementById("text").value,
          });
        }}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default AddItem;

//----------- functions ---------------
