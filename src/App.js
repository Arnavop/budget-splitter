import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Budget from './pages/Budget';
import SplitExpenses from './pages/SplitExpenses';
import './index.css';
import Login from './pages/Login';
import Signup from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/split-expenses" element={<SplitExpenses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;