import { Card } from "./Card";
import ExpenseItem from "./ExpenseItem";
import { IExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

interface IExpenseItems {
  items: IExpenseItem[];
}

export const Expenses: React.FC<IExpenseItems> = function (props) {
  return (
    <Card className="expenses">
      {props.items.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            date={data.date}
            title={data.title}
            amount={data.amount}
          />
        );
      })}
    </Card>
  );
};
