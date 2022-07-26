import Button from "../../../../Global/Button/styles";

function Card({
  setTransactionList,
  setDisplayList,
  transaction: { id: removeId, description, value, typeValue },
}) {
  function removeTransaction() {
    setTransactionList((transactionList) =>
      transactionList.filter(({ id }) => id !== removeId)
    );

    setDisplayList((displayList) =>
      displayList.filter(({ id }) => id !== removeId)
    );
  }

  return (
    <li className={typeValue.toLowerCase()}>
      <div className="transaction__details">
        <h3>{description}</h3>
        <span>{typeValue}</span>
      </div>
      <div className="transaction__important">
        <h4>{value}</h4>
        <Button onClick={removeTransaction}>lixeira</Button>
      </div>
    </li>
  );
}

export default Card;
