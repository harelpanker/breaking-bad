import React from "react";
import logo from "../../images/breaking-bad-logo.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='block'>
        <img src={logo} alt='Logo' />
        <a href='https://www.panker.io/' className='link'>
          panker.io
        </a>
      </div>
    </footer>
  );
};

export default Footer;
