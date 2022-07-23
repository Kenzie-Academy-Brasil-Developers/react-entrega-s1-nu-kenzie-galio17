import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Form from "./Form";
import List from "./List";
import TotalMoney from "./TotalMoney";

function Main() {
  const [transactionList, setTransactionList] = useState([]);
  const [displayList, setDisplayList] = useState(transactionList);
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() =>
    typeFilter.length
      ? setDisplayList(displayList)
      : setDisplayList(transactionList)
  );

  return (
    <main>
      <div className="container">
        <section>
          <Form
            setTransactionList={setTransactionList}
            setTypeFilter={setTypeFilter}
          />
          <TotalMoney displayList={displayList} typeFilter={typeFilter} />
        </section>
        <section>
          <Filter
            setDisplayList={setDisplayList}
            transactionList={transactionList}
            setTypeFilter={setTypeFilter}
          />
          <List
            displayList={displayList}
            setTransactionList={setTransactionList}
            setDisplayList={setDisplayList}
          />
        </section>
      </div>
    </main>
  );
}

export default Main;
