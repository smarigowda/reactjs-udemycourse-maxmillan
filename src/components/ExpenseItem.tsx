import ExpenseDate, { IExpenseDate } from "./ExpenseDate";

import "./ExpenseItem.css";

interface IExpenseItem extends IExpenseDate {
  title: string;
  amount: number;
}

const ExpenseItem: React.FC<IExpenseItem> = function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 data-testid="item-title">{props.title}</h2>
        <div className="expense-item__price" data-testid="item-price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;