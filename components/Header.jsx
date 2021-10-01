import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <h1>Unx</h1>
        </div>

        <nav>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>

        <a href="#" className="nav-btn">
          Dashboard
        </a>

        <img src="/gg_menu-right-alt.png" alt="ham" className="hamburger" />
      </div>
    </header>
  );
};

export default Header;
