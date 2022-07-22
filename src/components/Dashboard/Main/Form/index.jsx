import { useState } from "react";

function Form({ setTransactionList }) {
  const [userInput, setUserInput] = useState({
    description: "",
    value: "R$0,00",
    typeValue: "",
  });

  function handleValueInput(event) {
    const inputValue = event.target;
    let value = inputValue.value.replace(/[^\d]/g, "").replace(/^0*/, "");

    while (value.length < 3) {
      value = "0" + value;
    }
    value = value.replace(/(..)$/, ",$1");

    inputValue.value = `R$${value}`;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTransactionList((oldList) => [userInput, ...oldList]);
      }}
    >
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        value={userInput.description}
        minLength="1"
        id="description"
        onChange={(event) =>
          setUserInput({ ...userInput, description: event.target.value })
        }
      />
      <span>Ex: Compra de roupas</span>
      <div>
        <div>
          <label htmlFor="value">Valor</label>
          <input
            type="text"
            name="value"
            value={userInput.value}
            id="value"
            onChange={(event) => {
              handleValueInput(event);
              setUserInput({ ...userInput, value: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="typeValue">Tipo de Valor</label>
          <select
            name="typeValue"
            value={userInput.typeValue}
            id="typeValue"
            onChange={(event) =>
              setUserInput({ ...userInput, typeValue: event.target.value })
            }
          >
            <option value="">Selecione um tipo</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
