import React, { useState } from "react";
import './NavbarStyles.css';
import {SiDatabricks} from 'react-icons/si';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

import {useAuthContext} from '../../context/authContext';


const Navbar = () => {
   const {toggleAuth} = useAuthContext()
   const [nav, setNav] = useState(false);
   const handleNav = () => setNav(!nav);
   const navigate =  useNavigate()

   const handleLogout = () => {
       toggleAuth()
       navigate('/', {replace: true})
   }

    return (
        <div name='top' className="navbar">
        <div className="container">
        <div className="logo">
        <SiDatabricks className="icon" />
        <h1>Secured</h1>
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li> <Link to="/home">Home </Link> </li>
            <li><Link to="/recovery">Recovery </Link></li>
            <li><Link to="/cloud">Cloud </Link></li>
            <li><Link to="/contact">Contact </Link></li>
            <button onClick={handleLogout}>Log out</button>
            </ul>
            <div className="hamburger" onClick={handleNav}>
            {!nav ? (<FaBars className="icon" />) : (<FaTimes className="icon" />)}
            </div>
        </div>
        </div>
    )
}

export default Navbar;