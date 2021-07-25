import "./Card.css";

interface ICard {
  className: string;
  dataTestId?: string;
}

export const Card: React.FC<ICard> = (props) => {
  const classNames = "card " + props.className;
  return (
    <div className={classNames} data-testid={props.dataTestId}>
      {props.children}
    </div>
  );
};
