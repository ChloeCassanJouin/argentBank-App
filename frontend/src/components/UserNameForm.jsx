import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProfile } from '../redux/userSlice';
//import { updateUserProfileAPI } from '../API/api-UserProfile'

const UserNameForm = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName.value);

  const [newUserName, setNewUserName] = useState(userName);

  const handleSave = async () => {
    //const state = store.getState();
    const token = state.token.value;

  if (!token) {
      //console.error('No token found in store');
      return;
    }

    const updatedUser = { userName: newUserName };

    const response = await updateUserProfileAPI(token, updatedUser);

    if (response) {
      dispatch(retrieveUserName(newUserName));
      onSave();
    } else {
      console.error('Failed to update user profile');
    }
  };

  return (
    <div className="user-name-form">
      <h2>Edit User Info</h2>
      <form>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input 
            type="text" 
            id="userName" 
            name="userName"    
            onChange={(e) => setNewUserName(e.target.value)}  
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleSave}>Save</button>  
          <button type="button" onClick={onCancel}>Cancel</button>  
        </div>
      </form>
    </div>
  );
};

export default UserNameForm;