import React, { useEffect, useState } from 'react';
import './UserProfile.css';

// import firebase
import firebase from '../firebase';
import { updateUser } from '../js/actions/index';

// redux js file import
import store from '../js/store/index';

// import jQuery
import $ from 'jquery';

export default function UserProfile() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [loggedInUserProfilePicURL, setLoggedInUserProfilePicURL] = useState('');
  const [newProfilePicURL, setNewProfilePicURL] = useState('');

  store.subscribe(() => {
    setLoggedInUser(store.getState().loggedInUser);
    setLoggedInUserProfilePicURL(store.getState().userProfilePhotoURL);
  })

  let user = firebase.auth().currentUser;

  function updateNewProfilePictureURLState(e) {
    setNewProfilePicURL(e.target.value);
  }

  function updateProfilePicURL() {
    setLoggedInUserProfilePicURL(newProfilePicURL);
    user.updateProfile({
      // displayName: 'dino',
      photoURL: newProfilePicURL,
    });
    store.dispatch( updateUser({ 
      loggedInUserUsername: user.displayName, 
      userProfilePhotoURL: newProfilePicURL
    }) );

    // close modal after update button is clicked
    $('.modal').modal('hide')
  }

  return (
    <div id='userProfile'>
      <div id="profilePicture" className='text-center'>
        <img src={loggedInUserProfilePicURL} className="rounded-circle mt-4 mb-2" alt=""/>
        <br/>
        <button type='button' className='btn btn-link' data-toggle='modal' data-target='#exampleModal'>Change profile picture</button>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Change Profile Picture</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              {/* form for changing profile picture */}
              <form>
                <div className="form-group row">
                  <label htmlFor="currentProfilePicURL" className="col-sm-4 col-form-label">Current Picture URL</label>
                  <div className="col-sm-8">
                    <p className='text-break text-left'>{loggedInUserProfilePicURL}</p>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="newProfilePictureURL" className="col-sm-4 col-form-label">New Picture URL</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" onChange={(e) => {updateNewProfilePictureURLState(e);}} id="newProfilePictureURL" placeholder="Image URL" />
                  </div>
                </div>
              </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={() => {updateProfilePicURL();}}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className='mt-3 mb-0'>{loggedInUser}</h2>
      <button type='button' className='btn btn-link'>Change username</button>
    </div>
  )
}
