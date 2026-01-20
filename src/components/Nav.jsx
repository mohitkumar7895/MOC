import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="left">
        <div className="apple-icon">
          <img src="/navbaricon/dot.jpeg" alt="Apple" />
        </div>

        <div className="nav-item">
          <p>Mohit Kumar</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>

        <div className="nav-item">
          <p>Window</p>
        </div>

        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="nav-icon">
          <img src="/navbaricon/wifi.jpeg" alt="WiFi" />
        </div>

        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
