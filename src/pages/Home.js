import React from 'react';

const Home = () => {
  return (
    <>

      <div className="page home">
        <h1>Welcome to the Budgeting and Expense Splitter App</h1>
        <p>Manage your finances effectively and split expenses with ease.</p>

        <div className="features">
          <div className="feature">
            <h2>Budget Tracking</h2>
            <p>Set and monitor your monthly budgets with ease.</p>
          </div>
          <div className="feature">
            <h2>Expense Splitting</h2>
            <p>Quickly split expenses with friends and groups.</p>
          </div>
          <div className="feature">
            <h2>Financial Insights</h2>
            <p>Gain insights into your spending habits.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <button disabled>Get Started</button>
          <button disabled>Learn More</button>
        </div>
      </div>

      <footer className="footer">
        © 2025 Expense Splitter App. All rights reserved.
      </footer>
    </>
  );
};

export default Home;