import React from 'react';
import './button.scss';
import { FiSearch } from 'react-icons/fi';

function Button({ onClick }) {
  return (
    <button type='submit' onClick={onClick} className="button">
      <FiSearch />
    </button>
  );
}

export default Button;
