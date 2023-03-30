import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

const Navbar = () => {
    return (
        <section className="navbar">
            <div className="navbar__logo">LOGO</div>
            <div className="navbar__menu">
                <Link to="/mainInfo"><span className="nav mainInfo">MainInfo</span></Link>
                <Link to="/community"><span className="nav community">Community</span></Link>
                <Link to="/mypage"><span  className="nav mypage">MyPage</span></Link>
            </div>
        </section>
    );
};

export default Navbar;