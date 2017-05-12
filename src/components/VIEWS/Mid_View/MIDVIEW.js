import React from 'react';
import { PropTypes } from 'react';

import './MIDVIEW.css';
import './CARD.css';



MIDVIEW.propTypes = {
  data: PropTypes.array,
};

function MIDVIEW (props) {
  return (
    <section className="Mid_View">
      <ul className="Mid_Wrapper">
        <CARD data={props.data[0]} />
        <CARD data={props.data[1]} />
        <CARD data={props.data[2]} />
        <CARD data={props.data[3]} />
        <CARD data={props.data[4]} />
        <CARD data={props.data[3]} />


      </ul>
    </section>
  )
};

CARD.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  info: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.object,
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
