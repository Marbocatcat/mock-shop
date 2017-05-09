import React from 'react';
import PropTypes from 'prop-types';

import './CARD.css';

CARD.propTypes = {
  Image: PropTypes.object,
};

function CARD (props) {
  return (
      <li>
        <a href="">
            <div className="Card" style={ props.Image }></div>
        </a>
      </li>
  )
};



export default CARD;
