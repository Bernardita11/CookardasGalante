import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';

const ItemListContainer = ({greeting}) => {
    
    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);
        console.log(`Se agregó ${cantidad} al carrito!`);
    }
    
    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <ItemCount initial={0} stock={5} onAdd={agregarAlCarrito}/>
        </div>
    )
}

export default ItemListContainer;