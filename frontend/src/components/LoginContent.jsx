import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginUser } from '../API/api-auth'; 
import { retrieveToken } from '../redux/userSlice';

export default function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token); // Correct access to token

  useEffect(() => {
    if (token) {
      navigate('/profile'); 
    }
  }, [token, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    try {
      const token = await getLoginUser(user, dispatch);
      if (token) {
        dispatch(retrieveToken(token)); // Mettez à jour le token dans le store
        console.log('Login Content', token);
        
        navigate('/profile'); // Pour le débogage
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
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

/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginUser } from '../API/api-auth'; 
import { retrieveToken } from '../redux/userSlice';


export default function LoginContent() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
const dispatch = useDispatch();
const token = useSelector((state) => state.user.token);

useEffect(() => {
    console.log('Token updated:', token);
    if (token) {
      navigate('/profile'); 
    }
  }, [token, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    try {
        const response = await getLoginUser(user);
        if (response.token) {
          console.log('Login successful, token received:', response.token); // Pour le débogage
          dispatch(retrieveToken(response.token)); // Mettez à jour le token dans le store
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };


    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
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
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit" name="submit" id="submit">Sign In</button>
                </form>
            </section>
        </main>
    );
}*/
