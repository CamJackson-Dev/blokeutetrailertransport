import React from "react";
import "./Header.css"; // Ensure this CSS file exists

function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>
        <span className="highlight">B</span>
        loke <span className="highlight">U</span>te{" "}
        <span className="highlight">T</span>railer{" "}
        <span className="highlight">T</span>ransport
      </h1>
      <h2 className="slogan">Your Goods, Our BUTT – Let's Move!</h2>
    </header>
  );
}

export default Header;
