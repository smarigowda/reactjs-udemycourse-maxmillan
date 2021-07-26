import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/lets get started/i);
  expect(linkElement).toBeInTheDocument();

  // Component Integration Test - ExpensesFilter
  const yearFilter = screen.getByLabelText('Filter by year');
  userEvent.selectOptions(yearFilter, "2020");

  const expenseDateInput = screen.getByLabelText("Date");
  const expenseTitle = screen.getByLabelText("Title");
  const expenseAmount = screen.getByLabelText("Amount");
  userEvent.type(expenseDateInput, "2021-01-01");
  userEvent.type(expenseTitle, "my new ipad");
  userEvent.type(expenseAmount, "600");

  const submitButton = screen.getByTestId("submit-button");
  userEvent.click(submitButton);
});
