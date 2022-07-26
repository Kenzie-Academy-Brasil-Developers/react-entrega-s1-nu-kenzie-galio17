import { useState } from "react";
import Button from "../../../Global/Button/styles";
import TypeValueSelect from "./Select";

function Form({ setTransactionList, setTypeFilter }) {
  const [userInput, setUserInput] = useState({
    description: "",
    value: "R$ 0,00",
    typeValue: "",
    id: 1,
  });

  function handleValueInput(event) {
    const inputValue = event.target;
    let value = inputValue.value.replace(/[^\d]/g, "").replace(/^0*/, "");

    while (value.length < 3) {
      value = "0" + value;
    }
    value = value.replace(/(..)$/, ",$1");

    inputValue.value = `R$ ${value}`;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setTypeFilter("");
        setTransactionList((oldList) => [userInput, ...oldList]);
        setUserInput({ ...userInput, id: userInput.id + 1 });
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
      <div className="valueContainer">
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
          <TypeValueSelect
            name="typeValue"
            value={userInput.typeValue}
            id="typeValue"
            handleChange={(event) =>
              setUserInput({ ...userInput, typeValue: event.value })
            }
          />
        </div>
      </div>
      <Button primary type="submit">
        Inserir valor
      </Button>
    </form>
  );
}

export default Form;
