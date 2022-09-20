import Item from '../Item';
import React, {useState} from 'react';
import Modal from '../Modal';
import './styles.css';

/*const ItemList = ({data = []}) => {
    return (
        data.map(film => <Item key={film.id} info={film}/>)
    );
}*/

const ItemList =({productos}) => {

    const [modalShow, setModalShow] = useState(true);

    return (
        <div className='item-container'>
            {products.lenght ? productos.map(product=>{
                return <Item key={product.id} product={product}/>
            })
            :
            <h2>Loading...</h2>
            }
            { modalShow ? <Modal handleClose={setModalShow}/> : null}
        </div>
    )
}

export default ItemList;