import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/LOGO-REDONDO-HONDO.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Nav = styled.nav`

    width: 100vw;
    height: 95px;
    display: inline-flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    align-content: center;
    align-items: center;
    background: linear-gradient(to top, rgba(208, 135, 0, 0.2), rgba(208, 135, 0, 0.8) 20%);

    .logo-navbar {
        height: 70px;
        align-self: left;
        margin: 5px 15px;
        border: 1px solid rgba(202, 202, 202, 1);
        border-radius: 100%;
    }

    .ul-navbar {
        list-style: none;
        text-decoration: none;
    }

    .li-navbar {
        display: inline-flex;
        margin-right: 10px;
        padding: 1.5rem;
        text-decoration: none;
        color: inherit;
        margin: 10px;
    }

    .li-navbar a, :hover, :visited {
        font-weight: 500;
        list-style: none;
        text-decoration: none;
        color: black;
    }

    .li-navbar a:hover{
        color: white;
    }
`;

const NavBar = () => {
    /*    FUNCION DE OCULTAR CARRITO CUANDO NO HAY ITEMS
    
    const { cartItems } = useContext(CartContext);

    useEffect(() => {
        const link = document.getElementById("cart-widget");

        if(cartItems.length === 0){
            link.style.display = 'none';
        }else {
            link.style.display = 'inline-flex';
        }
    }, [cartItems]); */

    return (
        <Nav>
            <Link to={'/'}>
                <img src={logo} alt="Logo Cookardas" className='logo-navbar' />
            </Link>

            <ul className='ul-navbar'>
                <li className='li-navbar'><Link to={'/clasicas'}>Clásicas</Link></li>
                <li className='li-navbar'><Link to={'/veganas'}>Veganas</Link></li>
                <li className='li-navbar'><Link to={'/contact'}>Contacto</Link></li>
            </ul>
            
            <Link to={'/cart'} className='li-navbar' id="cart-widget">
                <CartWidget />
            </Link>
        </Nav>
    )
};

export default NavBar;