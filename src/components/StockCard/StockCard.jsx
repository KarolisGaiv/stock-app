import React from 'react';
import './stockCard.scss';
import { Card } from 'semantic-ui-react';

function StockCard({
  companyName,
  stockPrice,
  symbol,
  priceChangeCurrency,
  priceChangePercentage,
}) {

  return (
    <div className='stock-card'>
      <Card color={priceChangeCurrency > 0 ? 'green' : 'red'}>
        <Card.Content>
          <Card.Header>
            {companyName} ({symbol})
          </Card.Header>
          <Card.Meta className="change">
            {priceChangeCurrency} ({priceChangePercentage} %)
          </Card.Meta>
          <Card.Description className='stock-price'>
            {stockPrice}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default StockCard;
