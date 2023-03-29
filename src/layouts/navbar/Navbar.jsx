import React from 'react';
import './navbar.scss'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <NavLink to='/'><img src={logo} alt="logo de l'entreprise kasa" /></NavLink>
            <nav>
            <NavLink to="/" rel="noreferrer" className="linkNavbar">Accueil</NavLink>
            <NavLink to="/apropos" rel="noreferrer" className="linkNavbar">A Propos</NavLink>   
            </nav>
        </header>
    );
};

export default Navbar;