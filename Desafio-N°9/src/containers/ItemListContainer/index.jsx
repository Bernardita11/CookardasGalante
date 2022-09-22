import React, {useState, useEffect} from 'react';
import ItemCount from '../../components/ItemCount';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer =({greeting}) => {
    const [productos, setProductos] = useState([])

    const {categoryId} = useParams();

    console.log(categoryId);

    useEffect(() =>{
        (async ()=> {
            //La promise se ejecuta una única vez cuando se monta el componente
            /*const obtenerProductos = new Promise ((accept, reject)=>{
                setTimeout(()=>{
                    accept(products)
                }, 3000);
            })*/
            try {

                if (categoryId){
                    const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
                    const productos = await response.json();
                    setProductos(productos);

                } else {
                    const response = await fetch("https://fakestoreapi.com/products");
                    const productos = await response.json();
                    setProductos(productos);
                }
            
            } catch(error){
                console.log(error);
            }
        })()
    
    }, [categoryId])
}


console.log (productos)
    return(
        <div className='item-lis-container'>
            <ItemList products={productos}/>
        </div>
    )
export default ItemListContainer;


/*const films = [
    {id: 1, image:"https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg", price:"$20,59", title: "Interestelar"},
    {id: 2, image:"https://sm.ign.com/ign_es/tv/s/star-trek-/star-trek-2017-tv-series_y97a.jpg", price:"$32,03", title: "Star trek"},
    {id: 3, image:"https://es.web.img2.acsta.net/medias/nmedia/18/91/35/03/20141082.jpg", price:"$19,99", title: "Ronin"},

];*/

/*export const ItemListContainer = ({texto}) =>{

    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(films)
            }, 2000);
        });

        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }
    return(
        <>
        <ItemCount initial={3} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    )
}*/
