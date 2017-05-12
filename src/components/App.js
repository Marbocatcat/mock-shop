import React, { Component } from 'react';

import './App.css';
import 'normalize.css';

import TOPVIEW from './VIEWS/Top_View/TOPVIEW';
import MIDVIEW from './VIEWS/Mid_View/MIDVIEW';
import BOTTOMVIEW from './VIEWS/Bottom_View/BOTTOMVIEW';
import FOOTER from './FOOTER/FOOTER';

import data from './data.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
     }
  };



  render() {
    return (
      <div className="Container">
        <TOPVIEW />
        <MIDVIEW Data={ this.state.data }/>
        <BOTTOMVIEW />
        <FOOTER />
      </div>
    )
  }
};
