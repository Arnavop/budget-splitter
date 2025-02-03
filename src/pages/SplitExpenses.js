import React from 'react';

const SplitExpenses = () => {
  return (
    <div className="page split-expenses">
      <h1>Split Expenses</h1>
      <div className="group-form">
        <label>Group Name:</label>
        <input type="text" placeholder="Enter group name" disabled />
        <button disabled>Create Group</button>
      </div>
      <div className="expense-split">
        <h2>Expense Split</h2>
        <ul>
          <li>Member 1: $50</li>
          <li>Member 2: $50</li>
        </ul>
      </div>
    </div>
  );
};

export default SplitExpenses;