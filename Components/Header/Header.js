import React, { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="headerBox">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          paddingLeft: "20px",
        }}
      >
        <h2>Header Component</h2>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <li style={{ marginRight: "20px" }}>
            <a href="/home">Namaste Dev</a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="/body">Home</a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="/about">About Us</a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="/contact">Contact</a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="/cart">Cart</a>
          </li>
          <button
            style={{ marginRight: "20px" }}
            onClick={() => setLoggedIn(!loggedIn)}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
