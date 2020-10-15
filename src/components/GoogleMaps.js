import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './GoogleMaps.css';

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    return (
      <div id='GoogleMaps' style={{width: '50%', height: '50%'}}>
        <Map 
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI',
})(MapContainer);