import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileAPI } from '../API/api-UserProfile'; // Assurez-vous que le chemin est correct
import Account from './Account'; // Assurez-vous que le chemin est correct
import UserNameForm from './UserNameForm';

const UserContent = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const userName = useSelector((state) => state.user.userName); 

  const token = localStorage.getItem('token'); // ou `useSelector(state => state.auth.token)` si le token est stocké dans Redux

  // Assurez-vous que le jeton est défini
  if (!token) {
    console.error('No authentication token found.');
    return <p>No authentication token found. Please log in.</p>;
  }

  const fetchUserProfile = async () => {
    console.log('dispatch:', dispatch);
    try {
      const userProfile = await getUserProfileAPI({ token }, dispatch);
      console.log('User Profile:', userProfile);
      setUserData(userProfile);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      if (error.message === "Unauthorized: Invalid or missing token.") {
        // Logique pour gérer les erreurs d'autorisation, comme rediriger vers la page de connexion
        console.error('Unauthorized access, please log in again.');
      }
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []); // Assurez-vous que cette ligne a une dépendance vide pour exécuter useEffect une seule fois

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (newUserName) => {
    // Logique pour sauvegarder le nouveau nom d'utilisateur
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
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

/*import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Account from './Account';
import UserNameForm from './UserNameForm';
import { getUserProfileAPI } from '../API/api-UserProfile'; 


const UserContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token); // Accéder à `state.user.token`
  const userName = useSelector((state) => state.user.userName); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (token) {
        const profileData = await getUserProfileAPI({ token });
        if (profileData) {
          dispatch(retrieveProfile(profileData));
        }
      }
    };

    fetchUserProfile();
  }, [token, dispatch]);

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

export default UserContent;*/