import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpensesFilter from "../components/NewExpense/ExpensesFilter";

test("Year filter should call the call back", () => {
  const callback = jest.fn();
  render(
    <ExpensesFilter filteredYear={callback} selectedYear="2021" />
  );
  const filterByYear = screen.getByLabelText("Filter by year");
  userEvent.selectOptions(filterByYear, "2020");
  expect(callback).toHaveBeenNthCalledWith(1, "2020");
});
