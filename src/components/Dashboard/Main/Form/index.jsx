function Form() {
  return (
    <form>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        minLength="1"
        id="description"
      />
      <span>Ex: Compra de roupas</span>
      <div>
        <div>
          <label htmlFor="value">Valor</label>
          <input
            type="text"
            name="value"
            id="value"
            placeholder="R$0,00"
            onChange={(event) => {
              const inputValue = event.target;
              let value = inputValue.value
                .replace(/[^\d]/g, "")
                .replace(/^0*/, "");

              while (value.length < 3) {
                value = "0" + value;
              }
              value = value.replace(/(..)$/, ",$1");

              inputValue.value = `R$${value}`;
            }}
          />
        </div>
        <div>
          <label htmlFor="typeValue">Tipo de Valor</label>
          <select name="typeValue" id="typeValue">
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
