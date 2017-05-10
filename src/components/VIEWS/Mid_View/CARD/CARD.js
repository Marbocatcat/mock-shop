import React from 'react';
import PropTypes from 'prop-types';

import './CARD.css';

CARD.propTypes = {
  Image: PropTypes.object,
  Activate: PropTypes.string,
  header: PropTypes.string,
  link: PropTypes.string,
  Info: PropTypes.object,
}

function CARD (props) {
  return (
          <div className="Card" style={ props.Image }>
            <div className={ props.Activate }>
              <h1>{ props.Info.header }</h1>
              <p>{ props.Info.info }</p>
              <a href=""><h5>{ props.Info.link }</h5></a>
            </div>
           </div>
  )
};



export default CARD;
