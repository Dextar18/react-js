import React from 'react';

export default function Nav() {
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <svg
            width="134"
            height="30"
            viewBox="0 0 114 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>

        <div className="w-[85%] flex items-center justify-evenly">
          <div className="delivery-info">
            <b className="delivery-info">Delivery in 8 minutes</b>
            <p className="location-info">Rajkot, Gujarat, India</p>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for items ..."
              className="search-input"
            />
          </div>

          <div className="action-buttons">
            <button className="login-button">Login</button>
            <button className="cart-button">
              <i className="ri-shopping-cart-line"></i> My Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

