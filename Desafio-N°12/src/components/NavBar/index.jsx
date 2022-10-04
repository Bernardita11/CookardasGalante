import React from 'react';
import CartWidget from "../CartWidget";
import Select from "../Select"
import './styles.css';
import { useState } from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {

    //Nombre del estado, setNombreDelEstado (hook)
    const [navColor, setNavColor] = useState("#f3f3f3")

    const [loginModal, setLoginModal] = useState (false)

    const onChangeColor = (event) => {
        //console.log (event);
        //console.log (event.target.value)
        const color = event.target.value;
        setNavColor(color)}

    console.log (navColor);

    return (
        <>
        <ul style={{
            backgroundColor: navColor,
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/men's clothing">Men's Clothing</Link></li>
            <li><Link to="/category/women's clothing">Women's Clothing</Link></li>
            <li><Link to="/category/electronics">Electronics</Link></li>
            <li><Link to="/category/jewelery">Jewelery</Link></li>
            <div className='buttons-container'>
                <Button 
                size="medium"
                variant="outlined"
                onClick={handleLogin}>Login</Button>

                <Button 
                size="medium"
                variant="contained"
                onClick={handleSignup}>Signup</Button>
            </div>
            <CartWidget/>
            <Select handleColor={onChangeColor}/>
        </ul>
        </>
    )
}

export default NavBar;
