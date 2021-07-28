import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Expenses } from "../components/Expenses/Expenses";

const expenses = [
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
beforeEach(() => {
  render(<Expenses items={expenses} />);
});
test("should display a list of expense items filtered by the year", () => {
  expect(screen.getAllByTestId("expense-item")).toHaveLength(3);
});
test("when a year is selected from the list, it should filter the list", () => {
  const yearFilter = screen.getByLabelText("Filter by year");
  userEvent.selectOptions(yearFilter, "2020");
  expect(screen.getAllByTestId("expense-item")).toHaveLength(1);
});
test("when the list is empty, a message saying so should be displayed", () => {
  const yearFilter = screen.getByLabelText("Filter by year");
  userEvent.selectOptions(yearFilter, "2022");
  expect(screen.getByTestId("no-items-found")).toBeInTheDocument();
});
