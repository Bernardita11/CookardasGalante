import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
    return (
        <>
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            {totalItems !== 0 && <span style={{margin: '5px', alignSelf: 'center', fontWeight: 'bold'}}>{totalItems()}</span>}
        </>
    )
}

export default CartWidget;