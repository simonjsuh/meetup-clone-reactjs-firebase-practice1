import React from 'react'
import './CreateGroup.css';

export default function CreateGroup() {
  // run google maps autocomplete address from database function
  // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
  return (
    <div id='createGroupForm'>
      <div className="left">
        <iframe
          width="100%"
          height="100%"
          frameborder="0" style={{border:0}}
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI&q=Vancouver" allowfullscreen>
        </iframe>
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
