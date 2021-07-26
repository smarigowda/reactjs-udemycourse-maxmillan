import React from "react";

import ExpenseForm, { IExpenseData } from "./ExpenseForm";
import "./NewExpense.css";

export interface INewExpense {
  onAddExpense: (data: IExpenseData) => void;
}

const NewExpense: React.FC<INewExpense> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
