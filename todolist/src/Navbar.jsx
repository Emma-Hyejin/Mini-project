import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__logo">
                <span clasName="logo">To Do List</span>
            </div>
            <div className="navbar__menu">
                <Link to="/" className="navbar__menu_link">List</Link>
                <Link to="#" className="navbar__menu_link">Setting</Link>
                <span className="navbar__user">User</span>
            </div>
        </div>
    )
}

export default Navbar;