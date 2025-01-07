import React from 'react';
import '../nav/nav.css'; 

export const Nav = () => {
  return (
    <div className="nav-container">
      <h2 className="logo">
        Rosan<span>Shop</span>
      </h2>
      <ul className="nav-list">
        <li>Home</li>
        <li>Product</li>
        <li>
          <i className="fas fa-heart"></i> Favorite
        </li>
        <li>
          <i className="fas fa-bell"></i> Notification
        </li>
        <li>
          <i className="fas fa-shopping-cart"></i> Cart
        </li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for products"
        />
        <i className="fas fa-search search-icon"></i>
      </div>
    </div>
  );
};
