import React, { useState } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMap.css';

// redux js file import
import store from '../js/store/index';

function MapContainer(props) {
  const [mapCenter, setMapCenter] = useState({
    latitude: 49.2827291,
    longitude: -123.1207375
  });

  store.subscribe(() => {
    setMapCenter(store.getState().googleMapCoordinates);
  })

  return (
    <div id="googleMap">
      <Map 
        google={props.google}
        initialCenter={{
          lat: mapCenter.latitude,
          lng: mapCenter.longitude
        }}
        center={{
          lat: mapCenter.latitude,
          lng: mapCenter.longitude
        }}
      >
        <Marker 
          position={{
            lat: mapCenter.latitude,
            lng: mapCenter.longitude
          }} 
        />
      </Map>
    </div>
  )
} 

export default GoogleApiWrapper(
  (props) => ({
    apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI'),
    language: props.language,
  }
))(MapContainer)