import { useState } from "react";

import { Card } from "../UI/Card";
import ExpenseDate, { IExpenseDate } from "./ExpenseDate";

import "./ExpenseItem.css";

export interface IExpenseItem extends IExpenseDate {
  title: string;
  amount: number;
  id?: string;
}

const ExpenseItem: React.FC<IExpenseItem> = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Clicked !!!");
    // note that the updated value is not availabe immediately,
    // console log below will print old value when the button is clicked for the first time
    // console.log(title);
  };

  return (
    <Card className="expense-item" dataTestId="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 data-testid="item-title">{title}</h2>
        <div className="expense-item__price" data-testid="item-price">
          ${props.amount}
        </div>
        <button onClick={clickHandler} data-testid="test-button">Test Button</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
