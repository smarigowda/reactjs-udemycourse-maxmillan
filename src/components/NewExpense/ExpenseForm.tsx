import React, { useState } from "react";

import "./ExpenseForm.css";

export interface IExpenseData {
  title: string;
  amount: number;
  date: Date;
}

export interface IExpenseForm {
  onSaveExpenseData: (data: IExpenseData) => void;
  onCancelClick: () => void;
}

const ExpenseForm: React.FC<IExpenseForm> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEnteredTitle(target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEnteredAmount(target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEnteredDate(target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const expenseData: IExpenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  let newExpenseForm = (
    <form onSubmit={submitHandler} data-testid="new-expense-form">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            data-testid="expense-title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            data-testid="expense-amount"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            data-testid="expense-date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="actions-container new-expense__control">
        <div className="new-expense__actions">
          <button type="submit" data-testid="submit-button">
            Add Expense
          </button>
        </div>
        <div className="new-expense__actions">
          <button data-testid="cancel-button" onClick={props.onCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );

  return newExpenseForm;
};

export default ExpenseForm;
