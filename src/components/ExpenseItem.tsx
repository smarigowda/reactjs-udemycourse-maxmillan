import ExpenseDate, { IExpenseDate } from "./ExpenseDate";

import "./ExpenseItem.css";

export interface IExpenseItem extends IExpenseDate {
  title: string;
  amount: number;
  id?: string;
}

const ExpenseItem: React.FC<IExpenseItem> = function ExpenseItem(props) {
  return (
    <div className="expense-item" data-testid="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 data-testid="item-title">{props.title}</h2>
        <div className="expense-item__price" data-testid="item-price">
          ${props.amount}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
