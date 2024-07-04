import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoginUser } from '../API/api-auth';


export default function LoginContent() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
const token = useSelector((state) => state.token.value);

useEffect(() => {
    if (token) {
      navigate('/profile'); 
    }
  }, [token, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };
    await getLoginUser(user);
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
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
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