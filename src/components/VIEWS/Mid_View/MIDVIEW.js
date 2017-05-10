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
const image3 = {
  backgroundImage: "url(Assets/Image/photo3.jpg)",
};
const image4 = {
  backgroundImage: "url(Assets/Image/photo4.jpg)",
};
const image5 = {
  backgroundImage: "url(Assets/Image/photo5.jpg)",
};

function MIDVIEW (props) {
  return (
    <section className="Mid_View">
      <ul className="Mid_Wrapper">
        <CARD
          Header={ header.header }
          Info={ header.info }
          Link={ header.link }
          Active={ props.Active }
          />
        <CARD
          Image={ image2 }
          Header={ header.header }
          Info={ header.info }
          Link={ header.link }
          Active={ props.Active }
          handleChange={ props.handleChange}
          />
        <CARD
          Image={ image3 }
          Header={ header.header }
          Info={ header.info }
          Link={ header.link }
          handleChange={ props.handleChange }
          />
        <CARD
          Image={ image4 }
          Header={ header.header }
          Info={ header.info }
          Link={ header.link }
          />
        <CARD
          Image={ image5 }
          Header={ header.header }
          Info={ header.info }
          Link={ header.link }
          />
        <CARD
          Image={ image1 }
          Header={ header.header }
          Info={ header.info }
          Link={ header.link }
          />
      </ul>
    </section>
  )
};




export default MIDVIEW;
