import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from './Loading';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let { category } = useParams();

    useEffect(() => {
        setIsLoading(true);

        const db = getFirestore();

        const items = collection(db, "cookies");

        if(!category){
            getDocs(items)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                setItems(data);
            })
            .finally(() => setIsLoading(false));
        }else {
            const filteredItems = query(items, where("categoryId", "==", category));

            getDocs(filteredItems)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                setItems(data);
            })
            .finally(() => setIsLoading(false));
        }
    }, [category]);

    if (isLoading) return <Loading/>;

    return (
        <>
            <h2 style={{textAlign: 'center', marginTop: '40px', fontSize: "2rem"}}>{category ? category.toUpperCase() : 'TODO'}</h2>
            <br/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;