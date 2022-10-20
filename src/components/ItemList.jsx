import styled from 'styled-components';
import Item from './Item';

const ItemListDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    max-width: 90%;
    height: auto;
`

const ItemList = ({ items }) => {
    return (
        <ItemListDiv>
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </ItemListDiv>
    )
}

export default ItemList;