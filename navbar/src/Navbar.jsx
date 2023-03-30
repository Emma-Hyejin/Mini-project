import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

const Navbar = () => {
    return (
        <section className="navbar__container">
            <div className="navbar__logo">
                <Link to='/' className="nav logo">Go TRAVEL</Link>
            </div>
            <div className="navbar__menu">
                <Link to="/aboutus"><span className="nav navbar__aboutus">Aboutus</span></Link>
                <Link to="/journey"><span  className="nav navbar__journey">Journey</span></Link>
                <Link to="/community"><span className="nav navbar__community">Community</span></Link>
            </div>
        </section>
    );
};

export default Navbar;