import React, { useState } from "react";
import RequestInviteButton from "./invite-button.jsx";

function Navbar() {
  const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <>
      <img src="../images/logo.svg" />
      <div className="nav-bar">
        {navItems.map((item) => (
          <div key={item} className="nav-items">
            {item}
          </div>
        ))}
      </div>
      <RequestInviteButton></RequestInviteButton>
    </>
  );
}

export default Navbar;
