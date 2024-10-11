import React from 'react';
import '../assets/styles/Header.css';
import { CgSearch } from "react-icons/cg";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="welcome-message">
        <h1>Hello, Evano 👋</h1>
      </div>
      
      <div className="header-actions">
        <div className="search-bar">
        <CgSearch size={22} className="search-icon" /> 
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
