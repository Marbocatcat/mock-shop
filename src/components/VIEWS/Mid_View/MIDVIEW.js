import React from 'react';

import './MIDVIEW.css';
import './CARD.css';



function MIDVIEW (props) {

  return (

    <section className="Mid_View">
      <ul className="Mid_Wrapper">
        <CARD data={props.Data[1]} />
        <CARD data={props.Data} />
        <CARD data={props.Data} />
      </ul>
    </section>
  )
};

function CARD (props) {
  return (
        <li className="Trigger">
          { Object.keys(props.data).map(item =>
            <div key={item.objectID} className="Card" style={ item.image }>
              <div className="Info">
                <h1>{item.title}</h1>
                <p>{ item.info }</p>
                <a href=""><h5>{ item.link }</h5></a>
              </div>
            </div>
          )}
        </li>

  )
};

export default MIDVIEW;
