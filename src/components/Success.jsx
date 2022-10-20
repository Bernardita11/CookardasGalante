import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const SuccessDiv = styled.div`
width: 70%;
height: auto;
border: 1px solid white;
border-radius: 10px;
background: #ffe9d1;
padding: 1.5rem;
margin: 10px auto;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2 {
    font-size: 2rem;
    text-align: center;
}

.link {
    text-decoration: none;
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
    height: 2rem;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    overflow: visible;
    padding: 2px 1rem;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 20%;
    will-change: transform,opacity;
    margin: 15px auto;

    :hover {
        background: #F6F9FE;
        color: #174ea6;
    }

    :active {
        box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
        outline: none;
    }

    :focus {
        outline: none;
        border: 2px solid #4285f4;
    }

    :not(:disabled) {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    :not(:disabled):hover {
        box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
    }

    :not(:disabled):focus {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    :not(:disabled):active {
        box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
    }

    :disabled {
        box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }
}
`

const Success = () => {

    const { orderId, setOrderId } = useContext(CartContext);

    return(
        <SuccessDiv>
            <h2>Su compra fue realizada con exito. Su numero de orden es: <br/> {orderId}</h2>
            <Link to="/" className="link" onClick={() => setOrderId("")}>Volver al Inicio</Link>
        </SuccessDiv>
    )
}

export default Success;