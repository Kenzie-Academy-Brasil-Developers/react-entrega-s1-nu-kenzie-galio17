function Filter({ setDisplayList, transactionList, setTypeFilter }) {
  function filterTransactions(typeValueFilter) {
    if (typeValueFilter) {
      setTypeFilter(typeValueFilter);
      setDisplayList(
        transactionList.filter(({ typeValue }) => typeValue === typeValueFilter)
      );
    } else {
      setTypeFilter("");
    }
  }

  return (
    <section>
      <h2>Resumo Financeiro</h2>
      <div>
        <button onClick={() => filterTransactions()}>Todos</button>
        <button onClick={() => filterTransactions("Entrada")}>Entradas</button>
        <button onClick={() => filterTransactions("Despesa")}>Despesas</button>
      </div>
    </section>
  );
}

export default Filter;
