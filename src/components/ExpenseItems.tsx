import ExpenseItem from "./ExpenseItem";
import { IExpenseItem } from "./ExpenseItem";
import "./ExpenseItems.css";

interface IExpenseItems {
  expenses: IExpenseItem[];
}

export const ExpenseItems: React.FC<IExpenseItems> = function (props) {
  return (
    <div className="expenses">
      {props.expenses.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            date={data.date}
            title={data.title}
            amount={data.amount}
          />
        );
      })}
    </div>
  );
};
