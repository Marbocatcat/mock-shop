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
    this.state = { Info: "Info"}
  };

  handleChange = (props) => {
    console.log("Change Handled")
    this.setState({ Info: "Info Active" })
  };

  render() {
    return (
      <div className="Container">
        <TOPVIEW />
        <MIDVIEW Activate={ this.state.Info } handleChange={ this.handleChange }/>
        <BOTTOMVIEW />
        <FOOTER />
      </div>
    )
  }
};
