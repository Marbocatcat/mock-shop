import React from 'react';
import PropTypes from 'prop-types';

import './CARD.css';

CARD.propTypes = {
  Image: PropTypes.object,
};

function CARD (props) {
  return (
      <li>
          <div className="Card" style={ props.Image }>
            <h1>{ props.Header }</h1>
            <p>{ props.Info }</p>
            <a href=""><h5>{ props.Link }</h5></a>
          </div>
      </li>
  )
};



export default CARD;
