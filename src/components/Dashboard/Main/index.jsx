import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import TotalMoney from "./TotalMoney";

function Main() {
  const [transactionList, setTransactionList] = useState([]);
  useEffect(() => setDisplayList(transactionList));

  const [displayList, setDisplayList] = useState(transactionList);

  return (
    <main>
      <div className="container">
        <section>
          <Form setTransactionList={setTransactionList} />
          <TotalMoney displayList={displayList} />
        </section>
        <section>
          <List
            displayList={displayList}
            setTransactionList={setTransactionList}
          />
        </section>
      </div>
    </main>
  );
}

export default Main;
