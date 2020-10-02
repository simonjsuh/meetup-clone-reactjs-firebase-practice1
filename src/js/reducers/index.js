import { UPDATE_USER } from '../constants/action-types';

const initialState = {
  loggedInUser: '',
  userProfilePhotoURL: '',
};

function loggedInUserReducer(state = initialState, action) {
  if (action.type === UPDATE_USER) {
    // state.loggedInUser = action.payload;

    return Object.assign({}, state, {
      // loggedInUser: state.loggedInUser.concat(action.payload.loggedInUser)
      loggedInUser: action.payload.loggedInUser,
      userProfilePhotoURL: action.payload.userProfilePhotoURL,
    });
  }
  
  return state;
};

export default loggedInUserReducer;