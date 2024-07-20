import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <header className="AppHeader">
      <Link to="">
        <img src={logo} alt="HandDogSocial Logo" className="logo" />
      </Link>
      <nav className="nav">
        <Link to="about">About</Link>
        <Link to="features">Features</Link>
        <Link to="how">How It Works</Link>
        <Link to="community">Community</Link>
        <Link to="signup">Sign Up</Link>
      </nav>
      <button className="cta-button">Sign Up/Login</button>
    </header>
  );
};

export default AppHeader;
