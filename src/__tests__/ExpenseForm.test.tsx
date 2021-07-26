import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import ExpenseForm, {
  IExpenseData,
} from "../components/NewExpense/ExpenseForm";

test("ExpenseForm should be submitted", () => {
  const submitHandler = jest.fn();

  const { debug } = render(<ExpenseForm onSaveExpenseData={submitHandler} />);
  const expenseDateInput = screen.getByTestId("expense-date");
  const expenseTitle = screen.getByTestId("expense-title");
  const expenseAmount = screen.getByTestId("expense-amount");
  const expected: IExpenseData = {
    title: "my new ipad",
    amount: "600",
    date: new Date("2021-01-01"),
  };
  userEvent.type(expenseDateInput, "2021-01-01");
  userEvent.type(expenseTitle, "my new ipad");
  userEvent.type(expenseAmount, "600");
  userEvent.click(screen.getByTestId("submit-button"));
  expect(submitHandler).toHaveBeenNthCalledWith(1, expected);
  debug();
});
