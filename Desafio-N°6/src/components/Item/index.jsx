import React from 'react';
import './item.css';

/*const Item = ({info}) => {
    return (
        <a href="" className='film'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>{info.price}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod animi, laboriosam labore numquam necessitatibus dolorum accusamus, minus, repudiandae beatae ex harum. Magni, quibusdam iusto et totam ut nesciunt pariatur excepturi.</p>
        </a>
    )
}*/

//Corresponde a la Card del producto
const Item = ({product}) => {
    return(
        <div>
        <img src={product.image} width={250} alt="product"/>
        <h1>{product.title}</h1>
        </div>
    )
}

export default Item;

