import React, { useState } from 'react';
import { iex } from '../config/iex';
import './dashboard.scss';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import StockCard from '../components/StockCard/StockCard';

function Dashboard() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    const url = `${iex.base_url}/stock/${input}/quote?token=${iex.api_token}`;
    e.preventDefault();

    if (!input) {
      alert('Please enter stock ticker');
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResult(data);
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
        <InputField
          placeholder='Search for symbols or companies'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleSubmit} />
      </form>
      <div className='search-results-wrapper'>
        {isLoading ? null : (
          <StockCard
            companyName={result.companyName}
            stockPrice={(result.latestPrice).toFixed(2)}
            symbol={result.symbol}
            priceChangeCurrency={(result.change).toFixed(2)}
            priceChangePercentage={(result.changePercent * 100).toFixed(2)}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
