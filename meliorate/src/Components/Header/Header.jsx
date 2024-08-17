import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Header.css'

function Header() {
    return (
      <header className="header">
        <div className="header-icon">
        <i className="fas fa-shopping-cart"></i>
      </div>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;