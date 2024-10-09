import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savingsGoals, setSavingsGoals] = useState([]);

  useEffect(() => {
    axios.get('/api/incomes/').then(response => setIncomes(response.data));
    axios.get('/api/expenses/').then(response => setExpenses(response.data));
    axios.get('/api/savings_goals/').then(response => setSavingsGoals(response.data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Incomes</h2>
      <ul>
        {incomes.map(income => (
          <li key={income.id}>{income.date}: ${income.amount} from {income.source}</li>
        ))}
      </ul>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.date}: ${expense.amount} for {expense.category}</li>
        ))}
      </ul>
      <h2>Savings Goals</h2>
      <ul>
        {savingsGoals.map(goal => (
          <li key={goal.id}>{goal.goal_name}: ${goal.current_amount} / ${goal.target_amount} by {goal.due_date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
