import React from 'react';
import CartWidget from "../CartWidget";
import Select from "../Select"
import './styles.css';
import { useState } from "react";

const NavBar = () => {

    //Nombre del estado, setNombreDelEstado (hook)
    const [navColor, setNavColor] = useState("#f3f3f3")

    const onChangeColor = (event) => {
        //console.log (event);
        //console.log (event.target.value)
        const color = event.target.value;
        setNavColor(color)}

    console.log (navColor);

    return (
        <>
        <ul style={{
            backgroundColor: "navColor",
        }}>
            <li><a href="#/">Inicio</a></li>
            <li><a href="#/">Blog</a></li>
            <li><a href="#/">About us</a></li>
            <li><a href="#/">Contacto</a></li>
            <CartWidget/>
            <Select handleColor={onChangeColor}/>
        </ul>
        </>
    )
}

export default NavBar;
