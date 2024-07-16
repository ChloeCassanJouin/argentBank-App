import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProfile } from '../redux/userSlice';
import { updateUserProfileAPI } from '../API/api-UserProfile';

const UserNameForm = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName); // Correction de l'accès au state
  const token = useSelector((state) => state.user.token); // Correction de l'accès au state

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
        dispatch(retrieveProfile(updatedProfile)); // Mettez à jour le profil dans le store
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
          <label htmlFor="userName">User Name</label>
          <input 
            type="text" 
            id="userName" 
            name="userName" 
            value={newUserName}
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

/*import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProfile } from '../redux/userSlice';
import { updateUserProfileAPI } from '../API/api-UserProfile';

const UserNameForm = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName); // Correction de l'accès au state
  const token = useSelector((state) => state.user.token);

  const [newUserName, setNewUserName] = useState(userName);

  const handleSave = async () => {
    if (!token) {
      console.error('No token found in store');
      return;
    }

    const updatedUser = { userName: newUserName };

    // const response = await updateUserProfileAPI(token, updatedUser);

    // Simulation de la mise à jour du profil utilisateur (supprimer le commentaire ci-dessus et activer la ligne ci-dessous si l'API est disponible)
    const response = true;

    if (response) {
      dispatch(retrieveProfile({ userName: newUserName })); // Mettez à jour le profil dans le store
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
            value={newUserName}
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


/*import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProfile } from '../redux/userSlice';
import { updateUserProfileAPI } from '../API/api-UserProfile'

const UserNameForm = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);

  const [newUserName, setNewUserName] = useState(userName);

  const handleSave = async () => {
    const token = useSelector((state) => state.user.token);;

  if (!token) {
      console.error('No token found in store');
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

export default UserNameForm;*/