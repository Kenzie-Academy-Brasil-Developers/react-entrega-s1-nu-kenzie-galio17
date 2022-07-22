import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Form from "./Form";
import List from "./List";
import TotalMoney from "./TotalMoney";

function Main() {
  const [transactionList, setTransactionList] = useState([]);
  const [displayList, setDisplayList] = useState(transactionList);
  const [followDatabase, setFollowDatabase] = useState("");

  useEffect(() =>
    followDatabase.length
      ? setDisplayList(displayList)
      : setDisplayList(transactionList)
  );

  return (
    <main>
      <div className="container">
        <section>
          <Form setTransactionList={setTransactionList} />
          <TotalMoney displayList={displayList} />
        </section>
        <section>
          <Filter
            setDisplayList={setDisplayList}
            transactionList={transactionList}
            setFollowDatabase={setFollowDatabase}
          />
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
