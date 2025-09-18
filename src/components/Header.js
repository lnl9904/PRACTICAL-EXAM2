import React from 'react';
import '../css/header.css';


const Header = () => (
  <header className="header">
    <div className="logo">FPT Aptech</div>
    <nav>
      <a href="#">About Us</a>
      <a href="#">Products</a>
      <a href="#">Booking</a>
    </nav>
    <div className="auth">
      <button>Sign In</button>
      <button className="signup">Sign Up</button>
    </div>
  </header>
);

export default Header;