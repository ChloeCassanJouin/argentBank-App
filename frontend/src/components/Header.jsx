import React from 'react';
import { Link } from 'react-router-dom';
import argentBankLogo from '../assets/img/argentBankLogo.png'; 

const Header = () => {
    
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
                <Link className="main-nav-item" to="/Login">
                <i className="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Header;