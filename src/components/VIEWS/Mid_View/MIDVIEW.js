import React from 'react';

import './MIDVIEW.css';
import CARD from './CARD/CARD.js';


const header = {
  header: "News",
  info: "We've been busy taking pictures and can give you not only an exciting look at our collection, but also inspiration from our style specials, exciting features, interviews and more news from our pingqponq world. Here we go!",
  link: "Show News",
};

const image1 = {
  backgroundImage: "url(Assets/Image/photo1.jpg)",
};

const image2 = {
  backgroundImage: "url(Assets/Image/photo2.jpg)",
};

function MIDVIEW () {
  return (
    <section className="Mid_View">
      <ul className="Mid_Wrapper">
        <CARD
          Header={ header.header }
          Info={ header.info }
          Link={ header.link }
          />
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
