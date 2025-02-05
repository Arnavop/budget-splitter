import React from 'react';

const Budget = () => {
  return (
    <div className="page budget">
      <h1>Budget Management</h1>
      <div className="budget-form">
        <label>Monthly Budget:</label>
        <input type="number" placeholder="Enter your budget" />
        <button disabled>Set Budget</button>
      </div>
      <div className="expense-list">
        <h2>Expenses</h2>
        <ul>
          <li>Category: Groceries - $200</li>
          <li>Category: Rent - $1000</li>
        </ul>
      </div>
    </div>
  );
};

export default Budget;