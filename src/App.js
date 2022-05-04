// ----- CSS -----------
import { useContext, useReducer } from "react";
import styles from "./App.module.css";

//----------- Components ----------
import Component from "./components/Components";
import GlobalContext from "./GlobalContext";
// import HistoryElm from "./components/History/HistoryElm/HistoryElm";
//-------- Functions ---------------------
function updateGlobalContext(state, action) {
  let newHistory = [
    ...state.history,
    { text: action.text, amount: action.amount },
  ];
  let { Income, Expense } = calculateIncomeExpense(newHistory);
  let newState = {
    income: Income,
    expense: Expense,
    balance: Income - Expense,
    history: newHistory,
  };

  return newState;
}
function calculateIncomeExpense(historyArr) {
  let Income = 0;
  let Expense = 0;
  for (let i = 0; i < historyArr.length; i++) {
    if (historyArr[i].amount > 0) {
      Income += historyArr[i].amount;
    } else if (historyArr[i].amount < 0) {
      Expense += historyArr[i].amount;
    }
  }
  return { Income: Income, Expense: Expense * -1 };
}

//----------- App ----------------------
function App() {
  let GlobalReducer = useReducer(updateGlobalContext, {
    balance: 0,
    income: 0,
    expense: 0,
    history: [],
  });

  return (
    <GlobalContext.Provider value={GlobalReducer}>
      <div className={styles.mainContainer}>
        <Component.Header />
        <Component.Balance style={{ marginTop: "2rem" }} />
        <Component.IncomeExpense />
        <Component.History style={{ margin: "2rem 0" }} />
        <Component.AddItem />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
