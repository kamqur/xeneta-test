import React from "react";
import Select from "react-select";

import "./index.scss";

const InputMenuClass = "input-menu";

const InputMenu = ({ options, setValue, label, currentValue, space }) => (
  <div className={InputMenuClass}>
    <div className={`${InputMenuClass}-label`}> {label} </div>
    {options && (
      <Select
        onChange={setValue}
        className={`${InputMenuClass}-select-input`}
        options={options.map(item => ({ value: item, label: item.name }))}
      />
    )}
    {space && <div className={`${InputMenuClass}-space`} />}
  </div>
);

export default InputMenu;
