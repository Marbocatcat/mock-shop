import React from 'react';
import './TOPVIEW.css';

import NAVBAR from './NAV/NAVBAR';
import LEFTBAR from './LEFT-BAR/LEFTBAR';

const TOPVIEW = (props) => {
  return (
    <section className="Top_View">
      <NAVBAR />
      <LEFTBAR />
    </section>
  )
};

export default TOPVIEW;
