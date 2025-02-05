import React from 'react';
import { Link } from 'react-router-dom';
import BudgetIndicator from '../components/budgetindicator';

const Home = () => {
  return (
    <div className="page home">
      <h1 className="main-heading">Welcome to the Budgeting and Expense Splitter App</h1>
      <p className="sub-heading">Manage your finances effectively and split expenses with ease.</p>

      <BudgetIndicator/>
      <div className="features">
        <Link to="/budget" className="feature">
          <h2>Budget Tracking</h2>
          <p>Set and monitor your monthly budgets with ease.</p>
        </Link>
        <Link to="/split-expenses" className="feature">
          <h2>Expense Splitting</h2>
          <p>Quickly split expenses with friends and groups.</p>
        </Link>
        <Link to="/finance" className="feature">
          <h2>Financial Insights</h2>
          <p>Gain insights into your spending habits.</p>
        </Link>
      </div>


    </div>
  );
};

export default Home;
