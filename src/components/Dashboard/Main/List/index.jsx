import Card from "./Card";
import noCard from "../../../../assets/img/NoCard.svg";

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

  return displayList.length ? (
    <ul>{liItems}</ul>
  ) : (
    <div className="noCard">
      {" "}
      <h2>Você ainda não possui nenhum lançamento</h2>{" "}
      <img src={noCard} alt="ilustração de transaçõe" />
    </div>
  );
}

export default List;
