import React, { Component } from 'react';
import MapViewer from './MapViewer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.all_countries = require("./countries").country_list;
  }

  render() {
    return (
      <div className="App">
        <MapViewer highlightedCountry={"USA"} />
      </div>
    );
  }
}

export default App;
