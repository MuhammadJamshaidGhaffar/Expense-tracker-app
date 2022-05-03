// ----- CSS -----------
import styles from "./App.module.css";

//----------- Components ----------
import Component from "./components/Components";
//----------- App ----------------------
function App() {
  return (
    <div className={styles.mainContainer}>
      <Component.Header />
      <Component.Balance style={{ margin: "3rem 0" }} />
      <Component.IncomeExpense style={{ margin: "5rem 0" }} />
      <Component.History style={{ margin: "3rem 0" }} />
      <Component.AddItem />
    </div>
  );
}

export default App;
