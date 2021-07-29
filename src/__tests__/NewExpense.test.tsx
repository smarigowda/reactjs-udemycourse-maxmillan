import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import NewExpense from "../components/NewExpense/NewExpense"

test('cancel on expense form should display add new expense button', () => {
  const addExpenseCallback = jest.fn();
  render(<NewExpense onAddExpense={addExpenseCallback}/>);
  let addExpenseButton = screen.getByTestId('addNewExpenseButton');
  userEvent.click(addExpenseButton);
  expect(screen.getByTestId("new-expense-form")).toBeInTheDocument();
  const cancelFormButton = screen.getByTestId('cancel-button');
  userEvent.click(cancelFormButton);
  addExpenseButton = screen.getByTestId('addNewExpenseButton');
  expect(addExpenseButton).toBeInTheDocument();
})