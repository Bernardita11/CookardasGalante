import React, { useState } from 'react';
import { createContext } from "react";


//1° declarar el context
const Shop = createContext(null);

//2°, crear e provider (proveedor) que me va a envolver a la aplicación
const ShopProvider = ({children}) => {

    //Dentro del cotext irían: estados, efectos y funciones auxiliares
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        const productoRepetido = isInCart(item.id);
        console.log(productoRepetido);

        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id){
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem = (itemToRemove) => {
        const filteredProducts = cart.filter(item => item !== itemToRemove);
        setCart(filteredProducts)
    }

    const clearCart = () => {
        setCart([]);
    }

    return(
        //la primera llave es de javascript y la segunda es de un objeto 
        <Shop.Provider value={{cart, addItem, isInCart, removeItem, clearCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider