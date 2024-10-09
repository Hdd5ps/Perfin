import React, { useState } from 'react';
import axios from 'axios';

const AddIncome = () => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/incomes/', { amount, source, date })
      .then(() => {
        setAmount('');
        setSource('');
        setDate('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Income</h1>
      <label htmlFor="amount">Amount:</label>
      <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <label htmlFor="source">Source:</label>
      <input type="text" id="source" value={source} onChange={(e) => setSource(e.target.value)} required />
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default AddIncome;
