import React, { useState } from 'react';
import { iex } from '../config/iex';
import './dashboard.scss';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import StockCard from '../components/StockCard/StockCard';

function Dashboard() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    const url = `${iex.base_url}/stock/${input}/quote?token=${iex.api_token}`;
    e.preventDefault();

    if (!input) {
      alert('Please enter stock ticker');
    }

    const res = await fetch(url);
    const data = await res.json();
    setResult(data);
    setInput('');
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
        {result.length !== 0 ? (
          <StockCard
            companyName={result.companyName}
            stockPrice={result.latestPrice}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
