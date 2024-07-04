import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Account from './Account';
import UserNameForm from './UserNameForm';

const UserContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const userName = useSelector((state) => state.userName.value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
      <h1>Welcome back<br />{userName || 'Tony Jarvis'}</h1>
        {!isEditing && (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        )}
        {isEditing && (
          <UserNameForm onSave={handleSave} onCancel={handleCancel} />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
};

export default UserContent;

