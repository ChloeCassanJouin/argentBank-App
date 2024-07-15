import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import argentBankLogo from '../assets/img/argentBankLogo.png';
import { useDispatch } from 'react-redux';
import { deleteProfile } from '../redux/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInClick = () => {
    dispatch(deleteProfile());
    navigate('/login');
  };

    
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
                />
            </Link>
            <div>
                <Link className="main-nav-item" to="/Login" onClick={handleSignInClick}>
                <i className="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Header;
