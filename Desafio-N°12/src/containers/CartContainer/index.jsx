import React from 'react';
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export const Cart = () => {

    const {cart, removeItem, clearCart, total} = useContex(Shop);

    const renderImage = (image) => {
        return(
            <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
        )
    }

    const renderRemoveButton = (item) => {
        const product = item.value
        return (
            <Button onClick={()=> removeItem(product)} variant="contained" color="error">
                Remove
            </Button>
        )
    }

    const handleBuy = async() => {
        const importeTotal = total();
        const orden = ordenGenerada("Bruno", "bruno22@gmail.com", +5492615718091, cart, importeTotal);
        console.log(orden);

        const docRef = await addDoc(collection(db, "orders"), orden);

        //Actualizamos el stock del producto
        cart.forEach(async (productoenCarrito) => {
            //Primero acedemos a la referencia del producto
            const productRef = doc(db, "products", productoenCarrito.id);

            //Segundo llamamos al snapshot, llamando a firebase
            const productSnap = await getDoc(productRef);

            //Tercero en snapshot.data() nos devuelve la informacion del documento a actualizar
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoenCarrito.quantity,
        });

        })

        alert(`Gracias por su compra! Se generó la orden ${docRef.id}`);
    }

    const columns = [
        { field: 'image', headerName: 'Image', width: 250, renderCell: renderImage},
        { field: 'title', headerName: 'Product', width: 450 },
        { field: 'quantity', headerName: 'Quantity', width: 80 },
        {
            field: 'remove',
            headerName: 'Rremove',
            renderCell: renderRemoveButton,
            width: 120,
        },
    ];

    //Asignar un array con cada fila de la tabla, utilizando el cart
    const filas = []
    cart.forEach(item => {
        filas.push({
            id: item.id,
            image: item.image,
            title: item.title,
            quantity: item.quantity,
            remove: item,
        })
    })

    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={filas}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            rowHeight={150}
        />
        <Button onClick={clearCart} color="error" variant="outlined">Clear cart</Button>
        <Button onClick={handleBuy}>Confirmar compra</Button>
        </div>
    );
}

export default Cart;