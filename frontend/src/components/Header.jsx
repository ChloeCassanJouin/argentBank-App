import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import argentBankLogo from '../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile } from '../redux/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);

  const handleSignOutClick = () => {
    dispatch(deleteProfile());
    navigate('/');
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
      {location.pathname === '/profile' && <i className="fa-solid fa-vault"></i>}
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div className="main-nav-links">
        {isLoggedIn ? (
          <>
          <Link className="main-nav-item" to="/profile">
            {userName}
            <i className="fa fa-user-circle"></i>
          </Link>
          <Link className="main-nav-item" to="/vault">
          <i class="fa-regular fa-gear"></i>
          </Link>
          <Link className="main-nav-item" to="/" onClick={handleSignOutClick}>
          <i class="fa-solid fa-power-off"></i>
          </Link>
        </>
      ) : (
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
