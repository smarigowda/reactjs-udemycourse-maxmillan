import React from "react";

import ExpenseForm, { IExpenseData } from "./ExpenseForm";
import "./NewExpense.css";

export interface INewExpense {
  onAddExpense: (data: INewExpenseDataWithId) => void;
  onCancelClick: () => void;
}

export interface INewExpenseDataWithId extends IExpenseData {
  id: string;
}
const NewExpense: React.FC<INewExpense> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
    const expenseDataWithId = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataWithId);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={props.onCancelClick}
      />
    </div>
  );
};

export default NewExpense;
