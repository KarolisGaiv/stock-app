import React from 'react';
import './stockCard.scss';
import classNames from 'classnames';

function StockCard({
  companyName,
  stockPrice,
  symbol,
  priceChangeCurrency,
  priceChangePercentage,
}) {
  const priceChangeClasses = classNames('card__price-change', {
    'card__price-change--negative': priceChangePercentage < 0,
    'card__price-change--positive': priceChangePercentage > 0,
  });

  return (
    <div className='card'>
      <h3 className='card__title'>
        {companyName} ({symbol})
      </h3>
      <div className='card__details'>
        <div className='card__current-value'>${stockPrice}</div>
        <div className={priceChangeClasses}>
          {priceChangeCurrency} ({priceChangePercentage} %)
        </div>
      </div>
    </div>
  );
}

export default StockCard;
