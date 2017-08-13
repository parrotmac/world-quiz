import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Datamap from 'datamap';
import Datamap from 'datamaps/dist/datamaps.world.min.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.countries = require("./countries");
  }

  componentDidMount() {
    this.map = new Datamap(
      {
        element: this.mapDisplay,
        geographyConfig: {
            highlightOnHover: false,
            popupOnHover: false
        }
      }
    );

    this.countries.country_list.forEach(function(element) {
      console.log(element);
    }, this);

  }

  render() {
    return (
      <div className="App">
        <div className="mapDisplay" ref={(mapDisplay) => {this.mapDisplay = mapDisplay}}></div>
      </div>
    );
  }
}

export default App;
