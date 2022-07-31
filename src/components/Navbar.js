import React from "react";
import img from "./meme.png";
export default function Navbar() {
  return (
    <nav className="container">
      <div className="divlogs">
        <img src={img} alt="memelogo" />
        <h1>Meme Generator</h1>
      </div>
      <div className="ull">
        <h3 className="lis">React Course - Project 3</h3>
      </div>
    </nav>
  );
}
