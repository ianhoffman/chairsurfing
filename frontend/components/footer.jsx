import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <section className='footer'>
    <div className='footerLinks'>
      <a href='#'>ABOUT</a>
      <a href='#'>SAFETY</a>
      <a href='#'>SUPPORT</a>
      <a href='#'>BLOG</a>
      <a href='#'>SHOP</a>
    </div>
    <div className='languageDiv'>
      <select>
        <option>English</option>
        <option>Javascript</option>
      </select>
    </div>
  </section>
);

export default Footer;
