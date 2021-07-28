import ExpenseItem, { IExpenseItem } from "./ExpenseItem";

interface IExpensesList {
  items: IExpenseItem[];
}

const ExpensesList: React.FC<IExpensesList> = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback" data-testid="no-items-found">
        No Items Found
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            date={data.date}
            title={data.title}
            amount={data.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
