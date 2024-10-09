import React, { useState } from 'react';
import axios from 'axios';

const AddSavingsGoal = () => {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/savings_goals/', { goal_name: goalName, target_amount: targetAmount, current_amount: currentAmount, due_date: dueDate })
      .then(() => {
        setGoalName('');
        setTargetAmount('');
        setCurrentAmount('');
        setDueDate('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Savings Goal</h1>
      <label htmlFor="goalName">Goal Name:</label>
      <input type="text" id="goalName" value={goalName} onChange={(e) => setGoalName(e.target.value)} required />
      <label htmlFor="targetAmount">Target Amount:</label>
      <input type="text" id="targetAmount" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
      <label htmlFor="currentAmount">Current Amount:</label>
      <input type="text" id="currentAmount" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} required />
      <label htmlFor="dueDate">Due Date:</label>
      <input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Add Savings Goal</button>
    </form>
  );
};

export default AddSavingsGoal;
