import React, { useState } from 'react';
import { iex } from '../config/iex';
import './dashboard.scss';
import StockCard from '../components/StockCard/StockCard';
import { Button, Input } from 'semantic-ui-react';

function Dashboard() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    const url = `${iex.base_url}/stock/${input}/quote?token=${iex.api_token}`;
    e.preventDefault();

    if (!input) {
      return alert('Please enter stock ticker');
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResult((result) => [...result, data]);
      console.log(data);
      setInput('');
      setIsLoading(false);
    } catch (err) {
      alert('Unable to find stock price, please check ticker name');
    }
  };

  return (
    <div className='dashboard-wrapper'>
      <h1 className='dashboard-wrapper__title'>Stock App</h1>
      <form className='dashboard-wrapper__form'>
        <Input
          placeholder='Search for symbols or companies'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='dashboard-wrapper__search-field'
        />
        <Button icon='search' onClick={handleSubmit} color='teal' />
      </form>
      <div className='search-results__wrapper'>
        {isLoading
          ? null
          : result.map((stock) => (
              <ul key={stock.companyName} className="search-results__list">
                <li>
                  <StockCard
                    companyName={stock.companyName}
                    stockPrice={stock.latestPrice.toFixed(2)}
                    priceChangeCurrency={stock.change.toFixed(2)}
                    priceChangePercentage={stock.changePercent.toFixed(2)}
                    symbol={stock.symbol}
                  />
                </li>
              </ul>
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
