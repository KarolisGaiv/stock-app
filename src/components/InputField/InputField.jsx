import React from 'react';
import "./inputField.scss"

function InputField({ inputValue, onChange, placeholder }) {
  return (
    <input
      placeholder={placeholder}
      type='text'
      value={inputValue}
      onChange={onChange}
      className="inputField"
    ></input>
  );
}

export default InputField;
