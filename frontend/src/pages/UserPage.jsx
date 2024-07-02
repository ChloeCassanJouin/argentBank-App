import UserContent from '../components/UserContent';

export default function Home() {

    return (
      <>   
        <UserContent />
      </>
    );
  };

  /*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, clearToken } from '../redux/userSlice';

const User = () => {
  const username = useSelector((state) => state.user.username);
  const [newUsername, setNewUsername] = useState(username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearToken());
  };

  const handleUsernameChange = () => {
    dispatch(setUsername(newUsername));
  };

  return (
    <div>
      <h1>User Page</h1>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button onClick={handleUsernameChange}>Change Username</button>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;*/