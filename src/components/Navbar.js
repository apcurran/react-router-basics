import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav">
            <a href="" className="nav__logo">Web Dev News</a>
            <ul className="nav__list">
                <li className="nav__item"><Link to="/">Home</Link></li>
                <li className="nav__item"><Link to="/about">About</Link></li>
                <li className="nav__item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;