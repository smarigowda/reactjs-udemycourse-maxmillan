import React from "react";

interface IAddNewExpense {
  onAddNewExpenseClick: () => void;
}

const AddNewExpense: React.FC<IAddNewExpense> = (props) => {
  return (
    <div className="new-expense">
      <button data-testid="addNewExpenseButton" onClick={props.onAddNewExpenseClick}>Add New Expense</button>
    </div>
  );
};

export default AddNewExpense;
