import React from 'react';
import LEFTBAR from './LEFT-BAR/LEFTBAR';
import NAVBAR from './NAV/NAVBAR';
import './NAVSET.css';

const NAVSET = (props) => {
  return (
    <div className="nav-wrapper">
      <NAVBAR />
      <LEFTBAR />
    </div>
  )
};

export default NAVSET;
