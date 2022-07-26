function TotalMoney({ displayList, typeFilter }) {
  const total = displayList.reduce((total, { value, typeValue }) => {
    const curValue = Number(value.replace(/R\$\s(\d*),(\d*)/, "$1.$2"));
    if (typeValue === "Entrada") return total + curValue;

    return total - curValue;
  }, 0);

  return (
    displayList.length && (
      <section className="totalMoneyContainer">
        <h2>
          Valor total:{" "}
          <strong className="totalMoney">
            {total < 0 && typeFilter !== "Despesa" && "- "}R${" "}
            {Math.abs(total).toFixed(2)}
          </strong>
        </h2>
        <span>
          O valor se refere a
          {typeFilter.length ? `s ${typeFilter.toLowerCase()}s` : "o saldo"}
        </span>
      </section>
    )
  );
}

export default TotalMoney;
