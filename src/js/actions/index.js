import { UPDATE_USER } from '../constants/action-types';

export function updateUser(loggedInUserUsername) {
  return {
    type: UPDATE_USER,
    payload: {
      // loggedInUser: 'Ultraman',
      loggedInUser: loggedInUserUsername,
    }
  }
};