import React, { Component } from 'react';
import './CARD.css';

export default class CARD extends Component {
  render() {
    return (
      <div className="CARD">
        <ul className="CARDLIST">
          <li className="LEFTCARD">
            <div >
              <h1>
                Good Day.
              </h1>
              <p>
                pinqponq is a fresh brand for high quality backpacks and accessories. We develop products that combine design, function and sustainability in a unique way. pinqponq is known for strong mixes of materials, original designs and an unmatched attention to detail.
              </p>
            </div>
          </li>
          <li className="RIGHTCARD">
            <div >
              <h1>
                Good Conscience.
              </h1>
              <p>
              We use fabrics that are 100% made of recycled PET bottles. We are a recognized bluesign system partner and member of Fair Wear Foundation (FWF). The aim of bluesign is to keep toxic chemicals completely out of the supply chain. FWF works with us to verify and improve workplace conditions in our factories.
              </p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
};
