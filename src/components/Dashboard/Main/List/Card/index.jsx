function Card({
  setTransactionList,
  transaction: { id, description, value, typeValue },
}) {
  function removeTransaction() {
    setTransactionList((transactionList) =>
      transactionList.filter((newTransaction) => {
        console.log({ id, elemID: newTransaction.id });
        return newTransaction.id !== id;
      })
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
