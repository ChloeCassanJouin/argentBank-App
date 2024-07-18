import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAPI } from '../API/api-UserProfile'; 
import Account from './Account'; 
import UserNameForm from './UserNameForm';

const UserContent = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const userName = useSelector((state) => state.user.userName); 

  const token = localStorage.getItem('token');
  console.log("local storage: ", token) 

  if (!token) {
    console.error('No authentication token found.');
    return <p>No authentication token found. Please log in.</p>;
  }

  const fetchUserProfile = async () => {
    try {
      const userProfile = await getUserProfileAPI({ token }, dispatch);
      console.log('Usercontent', userProfile);
      setUserData(userProfile);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      if (error.message === "Unauthorized: Invalid or missing token.") {
        console.error('Unauthorized access, please log in again.');
      }
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []); 

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (newUserName) => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-white">
      <div className="header">
        <h1>Welcome back<br />{userName}</h1>
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
      {userData ? (
        <>
          <Account
            title="Argent Bank Checking (x8349)"
            amount={userData.checkingAmount}
            description="Available Balance"
          />
          <Account
            title="Argent Bank Savings (x6712)"
            amount={userData.savingsAmount}
            description="Available Balance"
          />
          <Account
            title="Argent Bank Credit Card (x8349)"
            amount={userData.creditAmount}
            description="Current Balance"
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default UserContent;
