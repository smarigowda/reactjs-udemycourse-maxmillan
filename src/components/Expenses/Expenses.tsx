import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { INewExpenseDataWithId } from "../NewExpense/NewExpense";
import { Card } from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

export interface IExpenseItems {
  items: INewExpenseDataWithId[];
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
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};
