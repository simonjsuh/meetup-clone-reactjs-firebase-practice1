import React, { useState, useEffect, useRef } from 'react';
import './CreateGroup.css';

// import Google Maps component
import GoogleMap from './GoogleMap';

// import Google Map Places Autocomplete Input field you created
import GoogleMapPlacesAutoCompleteInputField from './GoogleMapPlacesAutoCompleteInputField';

// import Google materials ui icon
import CloseIcon from '@material-ui/icons/Close';

export default function CreateGroup() {
  const [tags, setTags] = useState([]);
  // const [tagsArrayEmpty, setTagsArrayEmpty] = useState(true);

  const formTagContainer = useRef(null);

  // formTagContainer.addEventListener('keydown', (event) => {
  //   alert('hisdf');
  // });

  function formPreventDefault(e) {
    // formTagContainer.current.appendChild(createTag('Hypnosis'));
    e.preventDefault();
  }

  function addTag(e) {
    if (e.keyCode == 13 || e.keyCode == 188) {
      // console.log('label is: ' + e.target.value);
      setTags([...tags, { label: e.target.value }]);
      e.target.value = '';
    }
  }

  function removeTag(tagToBeRemoved) {
    let tagsArray = [...tags];

    let indexFound = -1;
    for (var i=0; i < tags.length; i++) {
      if (tags[i].label == tagToBeRemoved) {
        indexFound = i;
        break;
      }
    }

    tagsArray.splice(indexFound, 1);

    setTags(tagsArray);
  }
  
  useEffect(() => {
    // setTags([...tags, {label: 'Jumbotron'}, {label: 'CSS'}]);
    // addTag('hi');
  }, []);

  return (
    <div id='createGroupForm'>
      <div className="left">
        <GoogleMap />
      </div>
      <div className="right py-5 px-3">
        <h1 className='text-center'>Create a Group</h1>
        <form className='my-4' onSubmit={formPreventDefault}>
          <div className="form-group">
            <label htmlFor="groupName">Group name</label>
            <input type="text" id='groupName' className='form-control' placeholder='Enter group name' />
          </div>
          <div className="form-group">
            <label htmlFor="groupAddress">Address</label>
            <GoogleMapPlacesAutoCompleteInputField />
          </div>
          <div className="form-group">
            <label htmlFor="groupDescription">Group description</label>
            <textarea name="groupDescription" rows='5' id="groupDescription" className="form-control" placeholder='Describe your group here'></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="groupTags">Group tags (for searching groups)</label>
            
            {/* tag creation area of form */}
            <div ref={formTagContainer} className="tagContainer">
              {tags.map(tag => {
                return (
                  <div className='tag' data-tag-label={tag.label}>
                    {tag.label}
                    <span className='closeSymbol'>
                      <CloseIcon 
                        onClick={(e) => {
                          let labelToBeRemoved = e.currentTarget.parentNode.getAttribute('data-tag-label');
                          removeTag(labelToBeRemoved);
                          }
                        } 
                      />
                    </span>
                  </div>
                )
              })}
              <input  
                onKeyUp={addTag} 
                placeholder={tags.length == 0 ? 'Type your tags separated by enter key' : null}
                type="text"
              />
            </div>
          </div>
          <button className="btn btn-primary form-control">Create</button>
        </form>
      </div>
    </div>
  )
}
