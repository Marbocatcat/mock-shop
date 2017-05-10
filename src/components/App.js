import React, { Component } from 'react';

import './App.css';
import 'normalize.css';

import TOPVIEW from './VIEWS/Top_View/TOPVIEW';
import MIDVIEW from './VIEWS/Mid_View/MIDVIEW';
import BOTTOMVIEW from './VIEWS/Bottom_View/BOTTOMVIEW';
import FOOTER from './FOOTER/FOOTER';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Active: "Info"}
  };

  handleChange = (props) => {
    console.log("Change Handled")
    this.setState({ Active: "Card" })
  };

  render() {
    return (
      <div className="Container">
        <TOPVIEW />
        <MIDVIEW Active={ this.state.Active } handleChange={ this.handleChange }/>
        <BOTTOMVIEW />
        <FOOTER />
      </div>
    )
  }
};
