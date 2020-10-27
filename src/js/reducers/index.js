import { UPDATE_USER, UPDATE_GOOGLE_MAPS_COORDINATES } from '../constants/action-types';

// objects use parentheses
const initialState = {
  loggedInUser: '',
  userProfilePhotoURL: '',
  googleMapCoordinates: {
    // coordinates of Vancouver, BC, Canada
    longitude: -123.116226,
    latitude: 49.246292,
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_USER) {
    // state.loggedInUser = action.payload;

    return Object.assign({}, state, {
      // loggedInUser: state.loggedInUser.concat(action.payload.loggedInUser)
      loggedInUser: action.payload.loggedInUser,
      userProfilePhotoURL: action.payload.userProfilePhotoURL,
    });
  }

  if (action.type === UPDATE_GOOGLE_MAPS_COORDINATES) {
    return Object.assign({}, state, {
      googleMapCoordinates: {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      }
    });
  }
  
  return state;
};

export default rootReducer;