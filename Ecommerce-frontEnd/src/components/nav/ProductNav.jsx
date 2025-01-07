import React from 'react';
import '../nav/nav.css'; 

export const ProductNav = () => {
  return (
    <div className="product-nav-container">
      <ul className="product-nav-list">
        <li>
          <img src="/image/william-hook-9e9PD9blAto-unsplash.jpg" alt="Mobile" />
          <span>Mobile</span>
        </li>
        <li>
          <img src="/image/junko-nakase-Q-72wa9-7Dg-unsplash.jpg" alt="Dress" />
          <span>Dress</span>
        </li>
        <li>
          <img src="\image\freestocks-gv1T8bOoAUs-unsplash.jpg" alt="Electronics" />
          <span>Electronics</span>
        </li>
        <li>
          <img src="/image/maxim-hopman-Hin-rzhOdWs-unsplash.jpg" alt="Laptop" />
          <span>Laptop</span>
        </li>
        <li>
          <img src="/image/victor-hernandez-K_gIPI791Jo-unsplash.jpg" alt="Slippers" />
          <span>Slippers</span>
        </li>
      </ul>
    </div>
  );
};
