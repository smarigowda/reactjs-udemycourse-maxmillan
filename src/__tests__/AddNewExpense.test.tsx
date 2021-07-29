import { render, screen } from "@testing-library/react";
import AddNewExpense from "../components/NewExpense/AddNewExpense";

test("component should be rendered", () => {
  const callback = jest.fn();
  render(<AddNewExpense onAddNewExpenseClick={callback}/>);
  const element = screen.getByTestId('add-new-expense');
  expect(element).toBeInTheDocument();
});
