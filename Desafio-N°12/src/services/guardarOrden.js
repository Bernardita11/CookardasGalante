import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";

const guardarOrden = () => {
    console.log("Guardar orden");

    //Primer paso: abrir un batch
    const batch = writeBatch(db)

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []

    //Chequear el stock del producto en nuestro db y restarlo a la cantidad, si corresponde
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'products', productoEnCart.id))
        .then(async (documentSnapshot) => {
            //Generamos los datos del producto en tiempo real. Obtenemos el stock justo antes de guardar
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};

            //Hacemos un update en caso que el stock supere a la cantidad
            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'products', producto.id), {
                    stock: producto.stock - productoEnCart.quantity
                })
            } else {
                outOfStock.push(producto)
            }
            console.log("Productos fuera d stock");
            console.log(outOfStock);

            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    //Recien hacemos el commit una vez que se genera la orden
                    batch.commit().then(() => {
                        alert("Se generó la orden con id: " + id)
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            //Si tenemos productos fuera de stock al momento de generar la orden avisamos al usuario    
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                alert(`Poductos fuera de stock: ${mensaje}`)
            }
        })
    })
}

export default guardarOrden;