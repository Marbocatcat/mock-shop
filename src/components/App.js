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
      activate: "Info",
     }
  };

  handleMouseEnter = (ID) => {
    const activate = "Info Active";
    this.setState({ activate: activate})
  };

  render() {
    return (
      <div className="Container">
        <TOPVIEW />
        <MIDVIEW Data={ this.state.data } Activate={ this.state.activate } handleMouseEnter={ this.handleMouseEnter }/>
        <BOTTOMVIEW />
        <FOOTER />
      </div>
    )
  }
};
