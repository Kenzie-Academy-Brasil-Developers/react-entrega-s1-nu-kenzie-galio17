function TotalMoney({ displayList }) {
  const total = displayList.reduce((total, { value, typeValue }) => {
    const curValue = Number(value.replace(/R\$\s(\d*),(\d*)/, "$1.$2"));
    if (typeValue === "Entrada") return total + curValue;

    return total - curValue;
  }, 0);

  return (
    <section>
      <h2>
        Valor total:{" "}
        <strong>
          {total < 0 && "- "}R$ {Math.abs(total.toFixed(2))}
        </strong>
      </h2>
      <span>O valor se refere ao saldo</span>
    </section>
  );
}

export default TotalMoney;
