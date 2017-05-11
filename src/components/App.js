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
      0: false,
      1: false,
      activate: "Info",
     }
  };

handleClick=(id)=> {
  const val = !this.state[id];
  console.log({val});
  if(val===true) {
    const activate="Info Active";
    this.setState({activate: activate})
  } else {
    const deactivate="Info";
    this.setState({activate: deactivate})
  }
  this.setState({[id]: val});
};


  render() {
    return (
      <div className="Container">
        <TOPVIEW />
        <MIDVIEW Data={ this.state.data } Activate={this.state.activate} state={this.state[0]} handleClick={()=>this.handleClick(0) } />
        <BOTTOMVIEW />
        <FOOTER />
      </div>
    )
  }
};
