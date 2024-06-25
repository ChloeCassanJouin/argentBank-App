import React, { useEffect, useState } from 'react';

const User = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <main className="main bg-dark">
      <h1>Welcome, {userName}!</h1>
    </main>
  );
};

export default User;

/*import React from 'react';

const UserContent = () => {
    return (

<main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
        );
    };
    
    export default UserContent;*/

    /*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';

const User = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.name);
  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <h1>Welcome, {userName}!</h1>
     Display additional profile information if needed
    </main>
  );
};

export default User;
*/