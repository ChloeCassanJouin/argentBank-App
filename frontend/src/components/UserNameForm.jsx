import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName } from '../store/store.js';

const UserNameForm = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName.value);

  // État local pour le nouveau userName
  const [newUserName, setNewUserName] = useState(userName);

  // Fonction pour gérer la sauvegarde du nouveau userName
  const handleSave = () => {
    dispatch(setUserName(newUserName));  // Met à jour le userName avec l'action `setUserName`
    onSave();  // Appelle le callback onSave pour fermer le formulaire
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
            onChange={(e) => setNewUserName(e.target.value)}  // Met à jour l'état local pour le nouveau userName
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
          <button type="button" onClick={handleSave}>Save</button>  {/* Appelle `handleSave` pour mettre à jour le userName */}
          <button type="button" onClick={onCancel}>Cancel</button>  {/* Appelle `onCancel` pour annuler la modification */}
        </div>
      </form>
    </div>
  );
};

export default UserNameForm;