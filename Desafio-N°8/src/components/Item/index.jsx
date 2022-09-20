import React from 'react';
import './item.css';
import { useNavigate } from 'react-router-dom';

//Corresponde a la Card del producto
const Item = ({product}) => {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/detail/${product.id}`)
    }

    return(
        <div className='card-container' onClick={handleNavigate}>
        <img className='card-img' src={product.image} width={250} alt="product"/>
        <h1 className='card-title' >{product.title}</h1>
        </div>
    )
}

export default Item;

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


