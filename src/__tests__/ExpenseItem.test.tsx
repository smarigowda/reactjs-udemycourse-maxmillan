import ExpenseItem from "../components/ExpenseItem";
import { render, screen } from "@testing-library/react";

test("Expense Item should componse ExpenseDate", () => {
  const input = {
    date: new Date(2022, 4, 12),
    title: "My new expense",
    amount: 45,
  };

  render(<ExpenseItem {...input} />);
  const expDate = screen.getByTestId("expense-date");
  expect(expDate).toBeInTheDocument();
  expect(screen.getByTestId("item-price").textContent).toBe(
    `$${input.amount}`
  );
  expect(screen.getByTestId("item-title").textContent).toBe(input.title);
});
