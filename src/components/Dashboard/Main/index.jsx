import React, { useState, useEffect } from "react";
import Form from "./Form";

function Main() {
  const [transactionList, setTransactionList] = useState([]);
  useEffect(() => setDisplayList(transactionList));

  const [displayList, setDisplayList] = useState(transactionList);

  return (
    <main>
      <div className="container">
        <section>
          <Form setTransactionList={setTransactionList} />
        </section>
        <section></section>
      </div>
    </main>
  );
}

export default Main;
