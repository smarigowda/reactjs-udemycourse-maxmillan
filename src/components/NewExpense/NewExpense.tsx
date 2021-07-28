import React, { useState } from "react";
import AddNewExpense from "./AddNewExpense";

import ExpenseForm, { IExpenseData } from "./ExpenseForm";

import "./NewExpense.css";

export interface INewExpense {
  onAddExpense: (data: INewExpenseDataWithId) => void;
}

export interface INewExpenseDataWithId extends IExpenseData {
  id: string;
}
const NewExpense: React.FC<INewExpense> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
    const expenseDataWithId = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataWithId);
    setIsEditing(false);
  };
  const onAddNewExpenseClick = () => {
    setIsEditing(true);
  };
  const onCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <AddNewExpense onAddNewExpenseClick={onAddNewExpenseClick} />
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={onCancelClick}
        />
      )}
    </div>
  );
};

export default NewExpense;
