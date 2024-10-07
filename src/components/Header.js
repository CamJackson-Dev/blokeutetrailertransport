import React from "react";
import "./Header.css"; // Ensure this CSS file exists

function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>Bloke Ute Trailer Transport</h1>
      <h1 className="slogan">Your Goods, Our BUTT – Let's Move!</h1>

      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
