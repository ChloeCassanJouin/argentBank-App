import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProfile } from '../redux/userSlice';
import { updateUserProfileAPI } from '../API/api-UserProfile';

const UserNameForm = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName); 
  const token = useSelector((state) => state.user.token);

  const [newUserName, setNewUserName] = useState(userName);

  const handleSave = async () => {
    if (!token) {
      console.error('No token found in store');
      return;
    }

    const updatedUser = { userName: newUserName };

    try {
      const updatedProfile = await updateUserProfileAPI({ user: updatedUser, token });

      if (updatedProfile) {
        dispatch(retrieveProfile(updatedProfile)); 
        onSave();
      } else {
        console.error('Failed to update user profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="user-name-form">
      <h2>Edit User Info</h2>
      <form>
        <div className="form-group">
          <label htmlFor="userName">User Name: </label>
          <input 
            type="text" 
            id="userName" 
            name="userName" 
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            disabled
          />
        </div>
        <div className="form-buttons-container">
          <button className="form-button" type="button" onClick={handleSave}>Save</button>  
          <button className="form-button" type="button" onClick={onCancel}>Cancel</button>  
        </div>
      </form>
    </div>
  );
};

export default UserNameForm;
