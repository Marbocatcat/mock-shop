import React from 'react';
import PropTypes from 'prop-types';

import './MIDVIEW.css';
import './CARD.css';

CARD.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  info: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.object,
};
MIDVIEW.propTypes = {
  data: PropTypes.array,
};

function MIDVIEW (props) {
  const data = props.data.map(function(item, i) {
    return <CARD key={i} data={props.data[i]}/>
  });
  return (
    <section className="Mid_View">
      <ul className="Mid_Wrapper">
        {data}
      </ul>
    </section>
  )
};

function CARD (props) {
  const data=props.data;
  return (
        <li className="Trigger">
            <div className="Card" style={data.image}>
              <div className="Info">
                <h1>{data.title}</h1>
                <p>{data.info}</p>
                <a href=""><h5>{data.link}</h5></a>
              </div>
            </div>

        </li>

  )
};

export default MIDVIEW;
