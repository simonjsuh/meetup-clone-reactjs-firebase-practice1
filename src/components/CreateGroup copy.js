import React, { useState, useEffect } from 'react';
import './CreateGroup.css';

// import Google Maps component
import GoogleMaps from './GoogleMaps';

// import Google Maps component
import GoogleMap from './GoogleMap';

// import Google Maps Autocomplete API
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


// // import Google Maps API
// import {GoogleApiWrapper} from 'google-maps-react';

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI',
// })(CreateGroup);

export default function CreateGroup() {
  const [address, setAddress] = useState('');

  function handleChange(address) {
    setAddress({ address });
  };
 
  function handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI&libraries=places";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  // run google maps autocomplete address from database function
  // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
  return (
    <div id='createGroupForm'>
      <div className="left">
        <GoogleMap />

        <PlacesAutocomplete
          value={address}
          onChange={handleChange()}
          onSelect={handleSelect()}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        {/* <iframe
          width="100%"
          height="100%"
          frameborder="0" style={{border:0}}
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI&q=Vancouver" allowfullscreen>
        </iframe> */}
      </div>
      <div className="right py-5 px-3">
        <h1 className='text-center'>Create a Group</h1>
        <form className='my-4'>
          <div className="form-group">
            <label htmlFor="groupName">Group name</label>
            <input type="text" id='groupName' className='form-control' placeholder='Enter group name' />
          </div>
          <div className="form-group">
            <label htmlFor="groupAddress">Address</label>
            <input type="text" id='groupAddress' className="form-control" placeholder='Enter group address' />
          </div>
          <div className="form-group">
            <label htmlFor="groupDescription">Group description</label>
            <textarea name="groupDescription" rows='5' id="groupDescription" className="form-control" placeholder='Describe your group here'></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="groupTags">Group tags (for searching groups)</label>
            <textarea name="grouptagstextarea" id="groupTags" className='form-control' placeholder='Enter tags separated by a comma'></textarea>
          </div>
          <button className="btn btn-primary form-control">Create</button>
        </form>
      </div>
    </div>
  )
}
