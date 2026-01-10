// src/Components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./User/State/UserContext";
import FilterModal from "./User/Pages/FilterModal";
import { useFilterContext } from "./User/State/FilterContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { currentUser, logout } = useUserContext();
  const { applyFilters } = useFilterContext();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);
  const userButtonRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && 
          !userMenuRef.current.contains(event.target) && 
          userButtonRef.current && 
          !userButtonRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      
      if (window.innerWidth <= 768 && isOpen) {
        const backdrop = document.querySelector('.mobile-backdrop');
        if (backdrop && backdrop.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    closeMenu();
    navigate("/login");
  };

  const handleLoginClick = () => {
    navigate("/login");
    closeMenu();
  };

  const handleProfileUpdateClick = () => {
    navigate("/profile-update");
    closeMenu();
  };

  const handleDashboardClick = () => {
    navigate("/");
    closeMenu();
  };

  const handleChangePasswordClick = () => {
    navigate("/change-password");
    closeMenu();
  };

  const handleFilterClick = () => {
    setIsFilterOpen(true);
    closeMenu();
  };


  const handleProfilePreview=()=>{
    navigate("/profile-preview");
    closeMenu();
  }

  const handleGallery=()=>{
    navigate("/gallery");
    closeMenu();
  }
  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  const handleApplyFilter = (filters) => {
    console.log("Applied filters:", filters);
    applyFilters(filters);
    setIsFilterOpen(false);
  };

  const displayName = currentUser?.uname || currentUser?.name || "User";

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Brand Logo/Name */}
          <div className="nav-brand" onClick={handleDashboardClick}>
            <div className="brand-logo">
              <span className="logo-icon">💍</span>
            </div>
            <div className="brand-text">
              <span className="brand-main">Maratha</span>
              <span className="brand-sub">Matrimony</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`nav-content ${isOpen ? "active" : ""}`}>
            <ul className="nav-menu" ref={menuRef}>
              {/* Close Button for Mobile */}
              {isOpen && (
                <button 
                  className="mobile-close-btn"
                  onClick={closeMenu}
                >
                  ✕
                </button>
              )}
              
              <li className="nav-item" onClick={handleDashboardClick}>
                <div className="nav-item-content">
                  <span className="nav-icon">📊</span>
                  <span className="nav-text">Dashboard</span>
                </div>
              </li>
              
              <li className="nav-item" onClick={handleGallery}>
                <div className="nav-item-content">
                  <span className="nav-icon">🖼️</span>
                  <span className="nav-text">Gallery</span>
                </div>
              </li>
              
              {/* <li className="nav-item">
                <div className="nav-item-content">
                  <span className="nav-icon">⭐</span>
                  <span className="nav-text">Stories</span>
                </div>
              </li> */}

              {/* Change Password Option */}
              {currentUser && (
                <li className="nav-item" onClick={handleProfilePreview}>
                  <div className="nav-item-content">
                    <span className="nav-icon">🔒</span>
                    <span className="nav-text">Profile Preview</span>
                  </div>
                </li>
              )}

              <li className="nav-item" onClick={handleProfileUpdateClick}>
                <div className="nav-item-content">
                  <span className="nav-icon">👤</span>
                  <span className="nav-text">Update Profile</span>
                </div>
              </li>

              {/* Filter Button */}
              <li className="nav-item nav-filter-item">
                <button
                  type="button"
                  className="nav-filter-btn"
                  onClick={handleFilterClick}
                >
                  <span className="filter-icon">⚙️</span>
                  <span className="filter-text">Filters</span>
                </button>
              </li>
            </ul>

            {/* User Section */}
            <div className="nav-user-section">
              {/* {!currentUser ? 
              (
                <button
                  type="button"
                  className="nav-login-btn"
                  onClick={handleLoginClick}
                >
                  <span className="login-icon">🔑</span>
                  <span className="login-text">Login</span>
                </button>
              ) :
               ( */}

                {currentUser && 
                (<div className="nav-user" ref={userMenuRef}>
                  <button
                    type="button"
                    ref={userButtonRef}
                    className={`nav-user-btn ${isUserMenuOpen ? "active" : ""}`}
                    onClick={toggleUserMenu}
                  >
                    <div className="user-avatar">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                    <span className="user-name">{displayName}</span>
                    <span className={`user-caret ${isUserMenuOpen ? "rotate" : ""}`}>
                      ⌄
                    </span>
                  </button>

                  {isUserMenuOpen && (
                    <div className="user-dropdown">
                      <button
                        type="button"
                        className="dropdown-item"
                        onClick={handleChangePasswordClick}
                      >
                        <span className="dropdown-icon">🔒</span>
                        <span className="dropdown-text">Change Password</span>
                      </button>
                      <button
                        type="button"
                        className="dropdown-item logout-item"
                        onClick={handleLogout}
                      >
                        <span className="dropdown-icon">🚪</span>
                        <span className="dropdown-text">Logout</span>
                      </button>
                    </div>
                  )}
                </div>)}
              
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div
            className={`nav-hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {isOpen && <div className="mobile-backdrop" onClick={closeMenu}></div>}
      </nav>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={handleCloseFilter}
        onApply={handleApplyFilter}
      />
    </>
  );
};

export default Header;