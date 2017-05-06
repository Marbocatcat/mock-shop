import React from 'react';
import './NAVBAR.css';

const NAVBAR = (props) => {
  return (
    <nav className="nav-bar">
      <NAVLEFT />
      <NAVRIGHT />
    </nav>
  )
};

const NAVLEFT = (props) => {
  return (
    <ul className="NAV-LEFT">
      <li><a href="">EN/</a></li>

      <li><a href="">IT</a></li>
    </ul>
  )
};

const NAVRIGHT = (props) => {
  return (
    <ul className="NAV-RIGHT">
      <li><a href="">Sign in</a></li>
      <li><a href="">Bag(0)</a></li>
    </ul>
  )
};

export default NAVBAR;
