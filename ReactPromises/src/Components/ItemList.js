import Item from "../Components/Item";


const ItemList = ({ items }) => {
    return (
        <>
            items.map(item => <Item key={items.id}
                title={items.title}
                description={items.description}
                price={items.price}
                stock={items.stock}
                pictureURL={items.pictureURL} />
            )
        </>
    );
}

export default ItemList;