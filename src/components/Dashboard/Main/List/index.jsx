import Card from "./Card";

function List({ displayList, setTransactionList }) {
  console.log(displayList);
  const liItems = displayList.map((transaction) => (
    <Card
      key={transaction.id}
      setTransactionList={setTransactionList}
      transaction={transaction}
    />
  ));

  return <ul>{liItems}</ul>;
}

export default List;
