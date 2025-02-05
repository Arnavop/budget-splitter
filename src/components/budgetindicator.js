import React from 'react';

const BudgetIndicator = () => {
  // These would normally come from props or state management
  const monthlyBudget = 2000;
  const spent = 1200;
  const remaining = monthlyBudget - spent;
  const progressPercentage = (spent / monthlyBudget) * 100;

  // Determine progress bar color based on percentage
  const getProgressBarClass = () => {
    if (progressPercentage >= 90) return 'progress-bar danger';
    if (progressPercentage >= 70) return 'progress-bar warning';
    return 'progress-bar success';
  };

  return (
    <div className="budget-container">
      <h2>Monthly Budget Overview</h2>
      <div className="budget-details">
        <div className="budget-summary">
          <span>Spent: ${spent}</span>
          <span>Budget: ${monthlyBudget}</span>
        </div>
        <div className="progress-container">
          <div 
            className={getProgressBarClass()}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="budget-stats">
          <span>Remaining: ${remaining}</span>
          <span>Progress: {progressPercentage.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetIndicator;