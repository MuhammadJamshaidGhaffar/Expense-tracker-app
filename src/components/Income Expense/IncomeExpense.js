import React from "react";
import styles from "./IncomeExpense.module.css";

const IncomeExpense = ({ style }) => {
  return (
    <div className={styles.mainContainer} style={style}>
      <div className={`${styles.moneyDiv} ${styles.incomeDiv}`}>
        <p className="label">Income</p>
        <p className={styles.incomeDiv_value}>+$250</p>
      </div>
      <div className={`${styles.moneyDiv} ${styles.expenseDiv}`}>
        <p>Expense</p>
        <p className={styles.expenseDiv_value}>-$100</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
