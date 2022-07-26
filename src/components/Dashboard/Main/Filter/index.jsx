import Button from "../../../Global/Button/styles";

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
    <section className="filterContainer">
      <h2>Resumo Financeiro</h2>
      <div>
        <Button onClick={() => filterTransactions()}>Todos</Button>
        <Button onClick={() => filterTransactions("Entrada")}>Entradas</Button>
        <Button onClick={() => filterTransactions("Despesa")}>Despesas</Button>
      </div>
    </section>
  );
}

export default Filter;
