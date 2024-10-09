import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/expenses/', { amount, category, date })
      .then(() => {
        setAmount('');
        setCategory('');
        setDate('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Expense</h1>
      <label htmlFor="amount">Amount:</label>
      <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
