import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [fetchedItem, setFetchedItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    const itemDoesNotExist = {
        pictureUrl: "https://www.pngitem.com/pimgs/m/599-5998799_block-icon-clipart-hd-png-download.png",
        title: "El item NO existe",
        stock: 0,
        price: 0,
    };

    let param = useParams();

    useEffect(() => {
        setIsLoading(true);

        const db = getFirestore();

        const docRef = doc(db, "cookies", param.id);

        getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() === undefined){
                    setFetchedItem(itemDoesNotExist);
                }else {
                    setFetchedItem({id: snapshot.id, ...snapshot.data()});
                }
            })
            .catch((err) => console.log('Error', err))
            .finally(() => setIsLoading(false));

    }, [param.id])
    
    return (
        isLoading ? <Loading/> : <ItemDetail item={fetchedItem} fetched={{fetchedItem: fetchedItem, setFetchedItem: setFetchedItem}} />
    )
}

export default ItemDetailContainer;