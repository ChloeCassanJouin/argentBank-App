import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginUser } from '../API/api-auth'; 
import { retrieveToken } from '../redux/userSlice';

export default function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // État pour le message d'erreur
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token) {
      navigate('/profile'); 
    }
  }, [token, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    try {
      const token = await getLoginUser(user);
      if (token) {
        dispatch(retrieveToken(token)); // Mettez à jour le token dans le store
        navigate('/profile');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Les identifiants utilisés ne sont pas corrects. Veuillez réessayer.');
    }
  };


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <div className="user-circle-container">
          <i className="fa fa-user-circle sign-in-icon"></i>
        </div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit" name="submit" id="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
}
