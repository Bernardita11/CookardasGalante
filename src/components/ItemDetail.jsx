import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 50%;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
    background: #ffe9d1;

    .checkout {
        padding: 1.5rem;
        text-decoration: none;
        color: inherit;

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
        width: auto;
        will-change: transform,opacity;
        margin: 5px;
    
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

    .checkout a, :hover, :visited {
        font-weight: 500;
        list-style: none;
        text-decoration: none;
        color: black;
    }

    .checkout a:hover{
        color: white;
    }
`

const ItemDetailImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: transparent;
`

const ItemDetailTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem;
    letter-spacing: 0.2rem;
`

const ItemDetailText = styled.p`
    margin: 0.7rem;
    font-size: 1.2rem;
`

const ItemDetail = ({ item }) => {
    const [amount, setAmount] = useState(0);
    const { addItem, cartItems } = useContext(CartContext);
    
    const itemInCart = cartItems.filter((cookie) => cookie.id === item.id);
    const itemQuantity = itemInCart[0]?.quantity === undefined ? 0 : itemInCart[0].quantity;

    const [itemStock, setItemStock] = useState(item.stock - itemQuantity);

    const findItem = cartItems.find(product => product.id === item.id);

    useEffect(() => {
        findItem === undefined ? setAmount(0) : setAmount(findItem.quantity);
    }, [findItem])

    function onAdd(value){
        if(itemStock >= value){
            setItemStock( itemStock - value );
            addItem( item , value );
            setAmount((prevState) => prevState + value);
        }else{
            alert('No hay suficiente stock');
        }
    }

    return (
        <>
            <ItemDiv>
                <ItemDetailImg src={item.pictureUrl} alt={item.title} />
                <ItemDetailTitle>{item.title}</ItemDetailTitle>

                <ItemDetailText>{item.description}</ItemDetailText>
                <ItemDetailText>Quedan {itemStock} cookies!</ItemDetailText>
                <ItemDetailText>$: {item.price}</ItemDetailText>

                {itemStock > 0 && <ItemCount stock={itemStock} initial={0} onAdd={onAdd} id={item.id} /> }

                <ItemDetailText>Carrito: {amount}</ItemDetailText>
                
                {amount !== 0 && <Link to={'/cart'} className='checkout'>Ir al checkout</Link>}
                
            </ItemDiv>
        </>
    )
}

export default ItemDetail;