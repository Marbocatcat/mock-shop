import React from 'react';
import PropTypes from 'prop-types';

import './CARD.css';

CARD.propTypes = {
  image: PropTypes.object,
  header: PropTypes.string,
  link: PropTypes.string,
  info: PropTypes.string,
}

function CARD (props) {
  return (
          <div className="Card" style={ props.image }>
            <div className={ props.activate }>
              <h1>{ props.title }</h1>
              <p>{ props.info }</p>
              <a href=""><h5>{ props.link }</h5></a>
            </div>
           </div>
  )
};



export default CARD;
