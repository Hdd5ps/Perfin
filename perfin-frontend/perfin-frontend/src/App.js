import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddIncome from './pages/AddIncome';
import AddExpense from './pages/AddExpense';
import AddSavingsGoal from './pages/AddSavingsGoal';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/add_income">Add Income</Link>
        <Link to="/add_expense">Add Expense</Link>
        <Link to="/add_savings_goal">Add Savings Goal</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add_income" component={AddIncome} />
        <Route path="/add_expense" component={AddExpense} />
        <Route path="/add_savings_goal" component={AddSavingsGoal} />
      </Switch>
    </div>
  );
}

export default App;
