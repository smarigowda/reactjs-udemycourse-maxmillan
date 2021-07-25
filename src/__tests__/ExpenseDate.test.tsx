import ExpenseDate from "../components/ExpenseDate";
import { render, screen } from '@testing-library/react';

test("ExpenseDate should render correct Year, Month and Day", () => {
  const date = new Date(2021, 5, 12);
  render(<ExpenseDate date={date}/>);
  const expDate = screen.getByTestId('expense-date');
  const expMonth = screen.getByTestId('month');
  const expDay = screen.getByTestId('day');
  const expYear = screen.getByTestId('year');
  expect(expDate).toBeInTheDocument();
  expect(expMonth.textContent).toBe('June');
  expect(expDay.textContent).toBe('12');
  expect(expYear.textContent).toBe('2021');
});
