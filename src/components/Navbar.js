import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav__logo">Web Dev News</Link>
            <ul className="nav__list">
                <li className="nav__item"><Link className="nav__link" to="/">Home</Link></li>
                <li className="nav__item"><Link className="nav__link" to="/about">About</Link></li>
                <li className="nav__item"><Link className="nav__link" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;