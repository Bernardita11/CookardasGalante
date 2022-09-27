import Item from '../Item';
import React from 'react';
import './styles.css';

/*const ItemList = ({data = []}) => {
    return (
        data.map(film => <Item key={film.id} info={film}/>)
    );
}*/

const ItemList =({productos}) => {

    return (
        <div className='item-container'>
            {products.lenght ? productos.map(product=>{
                return <Item key={product.id} product={product}/>
            })
            :
            <h2>Loading...</h2>
            }
        </div>
    )
}

export default ItemList;