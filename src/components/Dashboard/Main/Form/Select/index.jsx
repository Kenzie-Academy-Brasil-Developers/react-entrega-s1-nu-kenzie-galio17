import React from "react";
import Select, { StylesConfig } from "react-select";

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--grey-1)",
    border: "none",
  }),
};

const options = [
  { value: "Entrada", label: "Entrada" },
  { value: "Despesa", label: "Despesa" },
];

function TypeValueSelect({ handleChange }) {
  return (
    <Select options={options} styles={colourStyles} onChange={handleChange} />
  );
}

export default TypeValueSelect;
