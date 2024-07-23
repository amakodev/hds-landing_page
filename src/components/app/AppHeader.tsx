import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="AppHeader">
      <Link to="">
        <img src={logo} alt="HandDogSocial Logo" className="AppHeader__logo" />
      </Link>
      <button className="AppHeader__mobile-menu-button" onClick={toggleMobileMenu}>
        ☰
      </button>
      <nav className={`AppHeader__nav ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="about">About</Link>
        <Link to="features">Features</Link>
        <Link to="how">How It Works</Link>
        <Link to="community">Community</Link>
        <button className="AppHeader__cta-button">Enter HDS</button>
      </nav>
    </header>
  );
};

export default AppHeader;
