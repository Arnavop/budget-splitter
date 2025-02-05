import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <div className="navbar-brand">Budgeting App</div>
        <ul className='navbar-buttons'>
          <li><Link to="/login">Login</Link></li>
          <li>Sign Up</li>
        </ul>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/budget">Budget</Link></li>
        <li><Link to="/split-expenses">Split Expenses</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;