import React from "react";

import "./ExpensesFilter.css";

export interface IExpensesFilter {
  filteredYear: (year: string) => void;
  selectedYear: string;
}

const ExpensesFilter: React.FC<IExpensesFilter> = (props) => {
  const onChangeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLSelectElement;
    props.filteredYear(target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter-year">Filter by year</label>
        <select
          id="filter-year"
          value={props.selectedYear}
          onChange={onChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
