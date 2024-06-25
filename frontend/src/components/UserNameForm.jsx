import React from 'react';

const UserNameForm = ({ onSave, onCancel }) => {
  return (
    <div className="user-name-form">
      <h2>Edit User Info</h2>
      <form>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={onSave}>Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UserNameForm;