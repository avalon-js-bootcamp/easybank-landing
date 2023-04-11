import React, { useState } from "react";

function Navbar() {
  const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <>
      <div className="nav-bar">
        {navItems.map((item) => (
          <div key={item} className="nav-items">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
