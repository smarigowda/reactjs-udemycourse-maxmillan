import { render, screen } from "@testing-library/react";
import { IExpenseItem } from "../components/Expenses/ExpenseItem";
import ExpensesList from "../components/Expenses/ExpensesList";
const expenses: IExpenseItem[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const emptyExpenses: IExpenseItem[] = [];
test("list not empty", () => {
  render(<ExpensesList items={expenses} />);
  expect(screen.getAllByTestId("expense-item")).toHaveLength(4);
  expect(screen.queryAllByTestId("no-items-found")).toHaveLength(0);
});
test("list empty", () => {
  render(<ExpensesList items={emptyExpenses} />);
  expect(screen.getByTestId("no-items-found")).toBeInTheDocument();
  expect(screen.queryAllByTestId("expense-item")).toHaveLength(0);
});
