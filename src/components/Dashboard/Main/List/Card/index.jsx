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
    <li>
      <div>
        <h3>{description}</h3>
        <span>{typeValue}</span>
      </div>
      <h4>{value}</h4>
      <button onClick={removeTransaction}>lixeira</button>
    </li>
  );
}

export default Card;
