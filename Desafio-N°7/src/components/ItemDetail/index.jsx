import React from 'react';
import ItemCount from '../ItemCount';
import './style.css'

const ItemDetail = ({product}) => {
    return (
        <div className='container'>
            <div className='detail'>
            <img className='detail_image' src={product.image} alt="product-detail"/>
            </div>
            <div className='content'>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            </div>
            <ItemCount/>
    </div>
    )
}

export default ItemDetail;


        {/*<div className='detail-container'>
            <img className='detail_img' src={product.image} alt="product-detail"/>
            <div className='detail-subcontainer'>
                <h1>{product.title}</h1>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <ItemCount/>
            </div>
    </div>*/}