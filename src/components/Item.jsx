import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemDiv = styled.div`
    width: 250px;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
    background: #ffe9d1;
    padding: 1.5rem;

    .articleImage {
        width: 90px;
        height: 90px;
        margin: 0 auto;
        display: block;
        border-radius: 50%;
    }

    .articleImage + p {
        font-weight: bold;
        font-size: 1.2rem;
        padding-top: 10px;
    }

    .articleP {
        text-align: center;
        margin: 5px;
    }
`

const Button = styled.button`
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 1.5rem;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: flex;
    fill: currentcolor;
    font-size: 1rem;
    font-weight: 500;
    height: auto;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 150px;
    overflow: visible;
    padding: 2px 1rem;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform,opacity;
    margin: 2rem auto;
`

const Item = ({ item }) => {

    return (
        <>
            <ItemDiv>
                <img src={item.pictureUrl} alt={item.title} className="articleImage" />
                <p className="articleP">{item.title}</p>

                <Link to={`item/${item.id}`} style={{textDecoration : 'none'}}>
                    <Button>Ver descripción</Button>
                </Link>

            </ItemDiv>
        </>
    )
}

export default Item;