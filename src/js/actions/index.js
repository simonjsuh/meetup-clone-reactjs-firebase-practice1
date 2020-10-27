import { UPDATE_GOOGLE_MAPS_COORDINATES, UPDATE_USER } from '../constants/action-types';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: {
      loggedInUser: user.loggedInUserUsername,
      userProfilePhotoURL: user.userProfilePhotoURL,
    }
  }
};

// export const updateGoogleMapCenterPosition = latLng = ({
//   type: UPDATE_GOOGLE_MAPS_COORDINATES,
//   payload: {
//     latitude: latLng.latitude,
//     longitude: latLng.longitude,
//   }
// });

export function updateGoogleMapCenterPosition(latLng) {
  return {
    type: UPDATE_GOOGLE_MAPS_COORDINATES,
    payload: {
      latitude: latLng.latitude,
      longitude: latLng.longitude,
    }
  }
};