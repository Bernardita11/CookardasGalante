import React from 'react';
import './item.css';

const Item = ({info}) => {
    return (
        <a href="" className='film'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>{info.price}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod animi, laboriosam labore numquam necessitatibus dolorum accusamus, minus, repudiandae beatae ex harum. Magni, quibusdam iusto et totam ut nesciunt pariatur excepturi.</p>
        </a>
    )
}

export default Item;

