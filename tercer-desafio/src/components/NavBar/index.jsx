import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import React from 'react';
import CartWidget from "../CartWidget";
import './styles.css';

export const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <>
        <header>
            <h3>Sancy</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About Us</a>
                <a href="/#">Contacto</a>
                <a href="/#">Login</a>
                <button className="nav-btn nav-close-btn" onClick ={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick ={showNavbar}>
                <FaBars/>
            </button>
        </header>
        <CartWidget/>
        </>
    )
}

export default NavBar
