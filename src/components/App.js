import React, { Component } from 'react';
import './App.css';
import 'normalize.css';

{ /* VIEWS */ }

import TOPVIEW from './VIEWS/Top_View/TOPVIEW';
import MIDVIEW from './VIEWS/Mid_View/MIDVIEW';
import BOTTOMVIEW from './VIEWS/Bottom_View/BOTTOMVIEW';
import FOOTER from './FOOTER/FOOTER';


class App extends Component {
  render() {
    return (
      <div className="Container">
        <TOPVIEW />
        <MIDVIEW />
        <BOTTOMVIEW />
        <FOOTER />
      </div>
    )
  }
};

export default App;
