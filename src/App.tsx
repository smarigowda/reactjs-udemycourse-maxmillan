import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import NewExpense, {
  INewExpenseDataWithId,
} from "./components/NewExpense/NewExpense";
import { useState } from "react";
import AddNewExpense from "./components/NewExpense/AddNewExpense";

const initialExpenses: INewExpenseDataWithId[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [showNewExpense, setShowNewExpense] = useState(false);
  const [showAddNewExpenseButton, setShowAddNewExpenseButton] = useState(true);

  const addExpenseHandler = (expense: INewExpenseDataWithId) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const onCancelClick = () => {
    console.log("On Cancel clicked...");
    setShowNewExpense(false);
    setShowAddNewExpenseButton(true);
  };

  const onAddNewExpenseClick = () => {
    setShowAddNewExpenseButton(false);
    setShowNewExpense(true);
  };
  return (
    <div className="App">
      <h1>Lets get started...</h1>
      {showAddNewExpenseButton && (
        <AddNewExpense onAddNewExpenseClick={onAddNewExpenseClick} />
      )}
      {showNewExpense && (
        <NewExpense
          onAddExpense={addExpenseHandler}
          onCancelClick={onCancelClick}
        />
      )}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
