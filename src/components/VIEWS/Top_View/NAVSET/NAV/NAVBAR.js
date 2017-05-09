import React from 'react';
import './NAVBAR.css';


function NAVBAR () {
  return (
    <nav className="nav-bar">
      <NAVLEFT />
      <NAVRIGHT />
    </nav>
  )
};

function NAVLEFT () {
  return (
    <ul className="NAV-LEFT">
      <li><a href="">EN/</a></li>
      <li><a href="">IT</a></li>
    </ul>
  )
};

function NAVRIGHT () {
  return (
    <ul className="NAV-RIGHT">
      <li><a href="">Sign in</a></li>
      <li><a href="">Bag(0)</a></li>
    </ul>
  )
};

export default NAVBAR;
