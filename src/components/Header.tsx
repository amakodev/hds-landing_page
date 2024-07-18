import React from 'react';
import './css/Header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="HandDogSocial Logo" className="logo" />
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#community">Community</a>
        <a href="#sign-up">Sign Up</a>
      </nav>
      <button className="cta-button">Sign Up/Login</button>
    </header>
  );
};

export default Header;
