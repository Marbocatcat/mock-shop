import React from 'react';

import './MIDVIEW.css';
import CARD from './CARD/CARD.js';


function MIDVIEW (props) {
  const data = props.Data;
  return (
    <section className="Mid_View">
      <ul className="Mid_Wrapper">

        { data.map(item =>
          <li key={ item.objectID } onMouseEnter={() => props.handleMouseEnter(item.objectID) }>
            <CARD
              activate={ props.Activate }
              title={ item.title }
              info={ item.info }
              link={ item.link }
              image={ item.image }
              />
          </li>
        )};

      </ul>
    </section>
  )
};




export default MIDVIEW;
