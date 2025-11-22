import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
            <Link to="/home">Namaste Dev</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/body">Home</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/about">About Us</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/contact">Contact</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/cart">Cart</Link>
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
