import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { Card } from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { IExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

interface IExpenseItems {
  items: IExpenseItem[];
}

export const Expenses: React.FC<IExpenseItems> = (props) => {
  const filteredYear = (year: string) => {
    // console.log("at Expenses: onExpensesFilterHandler called");
    console.log(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredYear={filteredYear} />
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
    </div>
  );
};
