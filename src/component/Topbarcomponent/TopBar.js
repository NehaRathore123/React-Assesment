import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import './Topbar.css'; 
import { Toolbar, Typography } from '@mui/material';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="left-section">
        <div className="logo">
          <img src="assets/img/images.jpg" alt="Logo" className="logo-img" />
        </div>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="right-section">
      <div className="timer">
          <FontAwesomeIcon icon={faStopwatch} className="timer-icon" />
          <span className="time">00:03:20</span>
          <button className="stop-button">
            <FontAwesomeIcon icon={faStopwatch} />
          </button>
        </div>

        <div className="profile-dropdown">
          <div className="profile-header" onClick={toggleDropdown}>
            <img src="assets/img/jhon.jpg" alt="User" className="profile-picture" />
            <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
          </div>

          {isOpen && (
            <div className="dropdown-menu">
              <div className="user-info">
                <img src="assets/img/jhon.jpg" alt="User" className="profile-picture-large" />
                <div className="user-details">
                  <span className="user-name">John Doe</span>
                  <span className="user-role">UI/UX Designer</span>
                </div>
              </div>
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Account Setting</div>
              <div className="dropdown-item logout">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
