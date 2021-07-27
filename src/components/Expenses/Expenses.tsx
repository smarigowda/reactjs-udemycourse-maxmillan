import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { Card } from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { IExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export interface IExpenseItems {
  items: IExpenseItem[];
}

export const Expenses: React.FC<IExpenseItems> = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const filteredYear = (year: string) => {
    setSelectedYear(year);
  };
  const filteredItems = props.items.filter((data) => {
    return data.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          selectedYear={selectedYear}
        />
        {filteredItems.map((data) => {
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
