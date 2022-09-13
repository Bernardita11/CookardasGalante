import Item from '../Item';
import React from 'react';

/*const ItemList = ({data = []}) => {
    return (
        data.map(film => <Item key={film.id} info={film}/>)
    );
}*/

const ItemList =({productos}) => {
    return (
        <div>
            {productos.map(product=>{
                return <Item key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ItemList;