import React from 'react';

import './MIDVIEW.css';
import CARD from './CARD/CARD.js';


const image1 = {
  backgroundImage: "url(Assets/Image/photo1.jpg)",
};

const image2 = {
  backgroundImage: "url(Assets/Image/photo2.jpg)",
}

function MIDVIEW () {
  return (
    <section className="Mid_View">
      <ul className="Mid_Wrapper">
        <CARD Image={ image1 }/>
        <CARD Image={ image2 }/>
        <CARD Image={ image1 }/>
        <CARD Image={ image1 }/>
        <CARD Image={ image1 }/>
        <CARD Image={ image1 }/>
      </ul>
    </section>
  )
};




export default MIDVIEW;
