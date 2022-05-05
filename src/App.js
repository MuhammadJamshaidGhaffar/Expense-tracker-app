// ----- CSS -----------
import { useReducer } from "react";
import styles from "./App.module.css";

//----------- Components ----------
import Component from "./components/Components";
import GlobalContext from "./GlobalContext";
//-------- Functions ---------------------
function updateGlobalContext(state, action) {
  let newHistory = [];
  switch (action.type) {
    case "delete":
      newHistory = deleteHistoryElm(action.id, state.history);
      break;
    case "add":
      let newId =
        state.history.length === 0
          ? 1
          : state.history[state.history.length - 1].id + 1;
      newHistory = [
        ...state.history,
        {
          text: action.text,
          amount: action.amount,
          id: newId,
        },
      ];

      break;
    default:
      newHistory = [...state.history];
  }

  localStorage.setItem("history", JSON.stringify(newHistory));
  return getNewGlobalStateObj(newHistory);
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
function getNewGlobalStateObj(newHistory) {
  let { Income, Expense } = calculateIncomeExpense(newHistory);
  let newState = {
    income: Income,
    expense: Expense,
    balance: Income - Expense,
    history: newHistory,
  };
  return newState;
}
function deleteHistoryElm(id, history) {
  return history.filter((elm) => elm.id !== id);
}

//----------- App ----------------------
function App() {
  if (localStorage.getItem("history") == null) {
    console.log("Local storage was empty , Filling it with empty array");
    localStorage.setItem("history", JSON.stringify([]));
  }
  let GlobalReducer = useReducer(
    updateGlobalContext,
    getNewGlobalStateObj(JSON.parse(localStorage.getItem("history")))
  );

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
