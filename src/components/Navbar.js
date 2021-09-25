import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const setNavActive = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", setNavActive);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-wrapper">
        <div className="nav1-wrapper">
          <span className="triangle">&#9650;</span>
          <span>Vercel</span>
        </div>
        <div className="nav2-wrapper">
          <span>Templates</span>
          <span>Integrations</span>
          <span>Analytics</span>
          <span>Customers</span>
          <span>Pricing</span>
        </div>
        <div className="nav3-wrapper">
          <span>Contact</span>
          <span>Login</span>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
