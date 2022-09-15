import ItemCount from "../Components/ItemCount";
import ItemList from "../Components/ItemList";
import { useEffect, useState } from 'react';
import products from '../utils/products';
import ProducFetch from '../utils/ProducFetch'

const ItemListContainer = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ProducFetch(2000, products)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);

    const handleClick = () => {
        alert("Se añadio Producto al carrito con éxito.")
    }

    return (
        <>
            <p>{props.greeting}</p>
            <ItemCount handleClick={handleClick} />

            {
                data.map(item => (
                    <ItemList
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        pictureURL={item.pictureURL} />
                ))
            }
            
        </>
    );
}
export default ItemListContainer;
