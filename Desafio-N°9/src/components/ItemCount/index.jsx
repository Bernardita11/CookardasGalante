import React, {useState, useEffect} from 'react';
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock){
            setCount (count+1)
        } else{
            alert ("No hay stock disponible");
        }
    }

    const handleDecrement = () => {
            setCount( count-1)
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    //Montaje del componente
    useEffect(() => {
        //Array de dependencias vacío implica que el callback se ejecutará cuando se monta el componente por única vez
        console.log("Se montó el ItemCount");
    }, []);

    //Se monta y se actuliza
    useEffect(() => {
        //La función callback dentro dl useEffect se ejecutará cundo se monte el componente (por un lado) y cuando se actualice el valor del count
        console.log("Se actualizó el Estado!")
    }, [count]);

    return (
        <div className='container'>
            <h4>Jeans Breaks</h4>
            <h2 id='valor'>{count}</h2>
            <button onClick={handleAdd}>+</button>
            <button disabled={count <= initial} onClick={handleDecrement}>-</button>
            <button onClick={addCart}>Agregar al Carrito</button>
        </div>
    );
    //segunda opcion => <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
};

export default ItemCount;