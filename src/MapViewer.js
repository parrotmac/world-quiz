import React, { Component } from 'react';
import './MapViewer.css';

import Datamap from 'datamaps/dist/datamaps.world.min.js';

class MapViewer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        console.log("highlightedCountry", this.props.highlightedCountry);

        var mapData = {};
        mapData[this.props.highlightedCountry] = {
            fillKey: 'HIGH'
        }

        this.map = new Datamap(
            {
                element: this.mapDisplay,
                geographyConfig: {
                    highlightOnHover: false,
                    popupOnHover: false
                },
                fills: {
                    HIGH: '#FF6633',
                    defaultFill: "#C0C0C0"
                },
                data: mapData
            }
        );
    }

    render() {
        return (
            <div className="MapViewer">
                <div className="MapDisplay" ref={(mapDisplay) => { this.mapDisplay = mapDisplay }}></div>
            </div>
        );
    }
}

export default MapViewer;
