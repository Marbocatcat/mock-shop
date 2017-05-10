import React from 'react';
import PropTypes from 'prop-types';

import './CARD.css';

CARD.propTypes = {
  Image: PropTypes.object,
  Header: PropTypes.string,
  Info: PropTypes.string,
  Link: PropTypes.string,
  handleChange: PropTypes.func,
};


function CARD (props) {
  return (
      <li onMouseEnter={ props.handleChange }>
          <div className="Card" style={ props.Image }>
            <div className={ props.Active }>
              <h1>{ props.Header }</h1>
              <p>{ props.Info }</p>
              <a href=""><h5>{ props.Link }</h5></a>
            </div>
          </div>

      </li>
  )
};



export default CARD;
