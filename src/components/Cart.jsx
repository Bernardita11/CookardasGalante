import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const CartContainerNoItems = styled.div`
    width: 70%;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
    background: #ffe9d1;
    padding: 1.5rem;
    margin: 10px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .titulo-carrito {
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
    }

    .boton {
        text-decoration: none;
        align-items: center;
        appearance: none;
        background-color: #fff;
        border-radius: 1.5rem;
        border-style: none;
        box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
        box-sizing: border-box;
        color: #3c4043;
        cursor: pointer;
        display: flex;
        fill: currentcolor;
        font-size: 1rem;
        font-weight: 500;
        height: 2rem;
        justify-content: center;
        letter-spacing: .25px;
        line-height: normal;
        overflow: visible;
        padding: 2px 1rem;
        text-align: center;
        text-transform: none;
        transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 20%;
        will-change: transform,opacity;
        margin: 15px auto;
    
        :hover {
            background: #F6F9FE;
            color: #174ea6;
        }
    
        :active {
            box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
            outline: none;
        }
    
        :focus {
            outline: none;
            border: 2px solid #4285f4;
        }
    
        :not(:disabled) {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
        }
    
        :not(:disabled):hover {
            box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
        }
    
        :not(:disabled):focus {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
        }
    
        :not(:disabled):active {
            box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
        }
    
        :disabled {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
        }
    }
`

const CartContainer = styled.div`
    width: 70%;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
    background: #ffe9d1;
    padding: 1.5rem;
    margin: 10px auto;
    text-align: center;

    .titulo-carrito {
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
    }

    .lista-items {
        list-style-type: none;
        margin: 10px;
        padding: 0;
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .articleImg {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    .list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 10px;
    }

    .cross {
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        font-size: 1.25rem;
        font-weight: bold;
    }

    .boton {
        text-decoration: none;
        align-items: center;
        appearance: none;
        background-color: #fff;
        border-radius: 1.5rem;
        border-style: none;
        box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
        box-sizing: border-box;
        color: #3c4043;
        cursor: pointer;
        display: flex;
        fill: currentcolor;
        font-size: 1rem;
        font-weight: 500;
        height: 2rem;
        justify-content: center;
        letter-spacing: .25px;
        line-height: normal;
        overflow: visible;
        padding: 2px 1rem;
        text-align: center;
        text-transform: none;
        transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 20%;
        will-change: transform,opacity;
        margin: 15px auto;
    
        :hover {
            background: #F6F9FE;
            color: #174ea6;
        }
    
        :active {
            box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
            outline: none;
        }
    
        :focus {
            outline: none;
            border: 2px solid #4285f4;
        }
    
        :not(:disabled) {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
        }
    
        :not(:disabled):hover {
            box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
        }
    
        :not(:disabled):focus {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
        }
    
        :not(:disabled):active {
            box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
        }
    
        :disabled {
            box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
        }
    }
`

const Cart = () => {
    const { cartItems, totalPrice, removeItem } = useContext(CartContext);

    if(cartItems.length === 0) {
        return (
            <CartContainerNoItems>
                <h2 className='titulo-carrito'>No hay items en el carrito</h2>
                <Link to="/" className='boton'>Ver Catálogo</Link>
            </CartContainerNoItems>
        )
    }

    return (
        <>
            <CartContainer>
                <h2 className='titulo-carrito'>Carrito</h2>
                <br/>
                <ul className='lista-items'>
                    {cartItems.map((item, key) => {
                        return (
                            <div className='list' key={key}>
                                <img src={item.pictureUrl} alt={item.title} className='articleImg' />
                                <li><Link to={`/item/${item.id}`}>{item.title}</Link></li>
                                <li>x{item.quantity}</li>
                                <li>Subtotal: {item.price * item.quantity}</li>
                                <button className='cross' onClick={() => removeItem(item.id)}>&times;</button>
                            </div>
                        )
                    })}
                </ul>
                <h3>{`Su total es de: $${totalPrice()}`}</h3>
                <br/>
                <Link to='/form' className='boton'>Terminar compra</Link>
            </CartContainer>
        </>
    )
}

export default Cart;