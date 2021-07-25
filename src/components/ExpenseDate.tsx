import "./ExpenseDate.css";

export interface IExpenseDate {
  date: Date;
}

const ExpenseDate: React.FC<IExpenseDate> = function (props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date" data-testid="expense-date">
      <div className="expense-date__month" data-testid="month">{month}</div>
      <div className="expense-date__year" data-testid="year">{year}</div>
      <div className="expense-date__day" data-testid="day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
