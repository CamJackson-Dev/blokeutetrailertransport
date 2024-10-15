import React from "react";
import "./Header.css"; // Ensure this CSS file exists

function Header() {
  return (
    <header className="header-container">
      <img
        src="/img/hard-work-7.jpg"
        alt="A hard-working scene"
        className="gallery-image"
      />
      <div className="text-overlay">
        <h1>
          <span className="highlight">B</span>
          loke <span className="highlight">U</span>te{" "}
          <span className="highlight">T</span>railer{" "}
          <span className="highlight">T</span>ransport
        </h1>
        <h2 className="slogan">Your Goods, Our BUTT – Let's Move!</h2>
      </div>
    </header>
  );
}

export default Header;
