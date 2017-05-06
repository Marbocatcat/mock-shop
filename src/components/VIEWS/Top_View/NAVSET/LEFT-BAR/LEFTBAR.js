import React from 'react';
import './LEFTBAR.css';

const divStyle = {
  paddingTop: ".8rem",
}

const items = ["Shop Woman", "Shop Man", "Collections", "Blog", "Factory", "Brand Story", "Stores"].map((item, i) => (
  <li  style={ divStyle }  key={ i }><a href="">{ item }</a></li>
));


const LEFTBAR = (props) => {
  return (
    <div className="LEFTBAR">
      <ul className="List">
      { items }
      </ul>
    </div>
  )
};

export default LEFTBAR;
