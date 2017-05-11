import React from 'react';

import './MIDVIEW.css';
import './CARD.css';



function MIDVIEW (props) {
  const data = props.Data;

  return (
    <section className="Mid_View">
      <ul className="Mid_Wrapper">
        <li onClick={()=>props.handleClick()}>
          { data.map(item =>
            <div key={item.objectID} className="Card" style={ item.image }>
              <div className={ props.Activate }>
                <h1>{item.title}</h1>
                <p>{ item.info }</p>
                <a href=""><h5>{ item.link }</h5></a>
              </div>
            </div>
          )}
        </li>
        <li onMouseEnter={ props.handleClick }>
          { data.map(item =>
            <div key={item.objectID} className="Card" style={ item.image }>
              <div className={ props.Activate }>
                <h1>{item.title}</h1>
                <p>{ item.info }</p>
                <a href=""><h5>{ item.link }</h5></a>
              </div>
            </div>
          )}
        </li>
      </ul>
    </section>
  )
};

export default MIDVIEW;
