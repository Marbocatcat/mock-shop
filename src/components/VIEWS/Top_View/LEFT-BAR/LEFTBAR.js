import React from 'react';
import './LEFTBAR.css';

const items = ["Shop Woman", "Shop Man", "Collections", "Blog", "Factory", "Brand Story", "Stores"].map((item, i) => (
  <li key={ i }>{ item }</li>
));

const LEFTBAR = (props) => {
  return (
    <div className="LEFTBAR">
      <ul>
      <a href="">{ items }</a>
      </ul>
    </div>
  )
};

export default LEFTBAR;
