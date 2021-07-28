import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExpenseItem from "../components/Expenses/ExpenseItem";

// expect.extend({ toHaveTextContent });
test("Expense Item should componse ExpenseDate", () => {
  const input = {
    date: new Date(2022, 4, 12),
    title: "My new expense",
    amount: 45,
  };

  const { debug } = render(<ExpenseItem {...input} />);
  // debug();
  const expDate = screen.getByTestId("expense-date");
  expect(expDate).toBeInTheDocument();
  expect(screen.getByTestId("item-price").textContent).toBe(`$${input.amount}`);
  expect(screen.getByTestId("item-title")).toHaveTextContent(input.title);
});
test("Title should change when the test button is clicked", () => {
  const input = {
    date: new Date(2022, 4, 12),
    title: "My new expense",
    amount: 45,
  };

  render(<ExpenseItem {...input} />);
  expect(screen.getByTestId("expense-item")).toBeInTheDocument();
});
