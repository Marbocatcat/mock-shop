import React from 'react';
import './LEFTBAR.css';

const items = ["Shop Woman", "Shop Man", "Collections", "Blog", "Factory", "Brand Story", "Stores"].map((item, i) => (
  <li key={ i }><a href="">{ item }</a></li>
));

function LEFTBAR () {
  return (
    <div className="LEFTBAR">
      <ul className="List">
      { items }
      </ul>
    </div>
  )
};




export default LEFTBAR;
