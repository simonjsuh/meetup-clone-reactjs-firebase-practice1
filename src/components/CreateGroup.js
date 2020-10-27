import React, { useState, useEffect } from 'react';
import './CreateGroup.css';

// import Google Maps component
import GoogleMap from './GoogleMap';

import GoogleMapPlacesAutoCompleteInputField from './GoogleMapPlacesAutoCompleteInputField';

export default function CreateGroup() {
  return (
    <div id='createGroupForm'>
      <div className="left">
        <GoogleMap />
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
            {/* <input type="text" id='groupAddress' className="form-control" placeholder='Enter group address' /> */}
            <GoogleMapPlacesAutoCompleteInputField />
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
