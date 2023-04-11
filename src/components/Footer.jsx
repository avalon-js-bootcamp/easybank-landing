import React, { useState } from "react";

{
  /* function SocialMediaIcon() {
  const socialMedia = ["Facebook"];

  return (
    <>
      <div>
        {socialMedia.map((icon) => (
          <div key={icon}>{icon}</div>
        ))}
      </div>
    </>
  );
}
*/
}

function Footer() {
  const footerItems = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];

  return (
    <>
      <div className="footer-bar">
        <img src={"../images/logo.svg"}></img>
        {/*<SocialMediaIcon></SocialMediaIcon>*/}
        <div>
          {footerItems.map((item) => (
            <div key={item} className="footer-items">
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
