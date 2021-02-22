import React from 'react';
import "./stockCard.scss"

function StockCard({ companyName, stockPrice }) {
  return (
    <div className="card">
      <h3 className="card__title">{companyName}</h3>
      <div className="card__price">{stockPrice}</div>
    </div>
  );
}

export default StockCard;
