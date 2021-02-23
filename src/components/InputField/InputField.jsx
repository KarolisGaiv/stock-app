import React from 'react';
import "./inputField.scss"

function InputField({ value, onChange, placeholder }) {
  return (
    <input
      placeholder={placeholder}
      type='text'
      value={value}
      onChange={onChange}
      className="inputField"
    ></input>
  );
}

export default InputField;
