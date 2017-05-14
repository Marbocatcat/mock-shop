import React from 'react';
import './BOTTOMVIEW.css';

function BOTTOMVIEW (props) {
  return (
    <section className="Bottom_View">
      <div className="mid-wrapper">
        <h1>
          Spring / Summer 2017
        </h1>
        <BUTTON>Lookbook</BUTTON>
      </div>
    </section>
  )
};

function BUTTON (props) {
  return (
    <a href="" className="button">
      { props.children }
    </a>
  )
};

export default BOTTOMVIEW;
