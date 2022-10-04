import React, {useContext, useState} from 'react';
import ItemCount from '../ItemCount';
import {useNavigate} from 'react-router-dom';
import './style.css';
import {Shop} from '../../context/ShopProvider'

const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();
    
    const {addItem} = useContext(Shop);

    const addCart = (quantity) => {
        setQty(quantity);
    }

    const handleFinish = () => {
        const productToSave = {...product, quantity: qty}
        addItem(productToSave)
        navigate('./cart');
    }

    console.log(qty);

    return (
        <div className='container'>
            <div className='detail'>
            <img className='detail_image' src={product.image} alt="product-detail"/>
            </div>
            <div className='content'>
                <h1>{product.title}</h1>
                <p>${product.price}</p>
                <p>{product.description}</p>

                {qty ? (
                <button onClick={handleFinish}>Finalizar compra</button>
                ) : (
                <ItemCount stock={product.stock} initial={1} onAdd={addCart}/>
                )}
            </div>
        </div>
    )
}

export default ItemDetail;


