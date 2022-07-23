import Card from "./Card";

function List({ displayList, setTransactionList, setDisplayList }) {
  console.log(displayList);
  const liItems = displayList.map((transaction) => (
    <Card
      key={transaction.id}
      setTransactionList={setTransactionList}
      transaction={transaction}
      setDisplayList={setDisplayList}
    />
  ));

  return <ul>{liItems}</ul>;
}

export default List;
