import React, { useContext } from "react";
import styles from "./IncomeExpense.module.css";
import GlobalContext from "../../GlobalContext";

const IncomeExpense = ({ style }) => {
  let [{ income, expense }, updateGlobal] = useContext(GlobalContext);
  console.log("Inside IncomeExpense    :  ", income, "   ", expense);
  return (
    <div className={styles.mainContainer} style={style}>
      <div className={`${styles.moneyDiv} ${styles.incomeDiv}`}>
        <p className="label">Income</p>
        <p className={styles.incomeDiv_value}>+${income}</p>
      </div>
      <div className={`${styles.moneyDiv} ${styles.expenseDiv}`}>
        <p>Expense</p>
        <p className={styles.expenseDiv_value}>-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;

// --------- functions ----------------
