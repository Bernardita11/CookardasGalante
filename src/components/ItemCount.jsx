import React, { useState } from 'react';
import styled from 'styled-components';

const CounterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem;
`

const Input = styled.input`
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    text-align: center;
    width: 40px;
    background-color: #fff;
    border-radius: 1.5rem;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
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
    width: auto;
    will-change: transform,opacity;
    margin: 5px;

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
`


const ItemCount = ({stock, initial, onAdd, id}) => {

    const [iValue, setiValue] = useState(initial);

    const updateCountInput = (e) => {
        const { value } = e.target;
        if (value <= stock) {
          setiValue(isNaN(value) ? 0 : parseInt(value));
        }
    };

    function clickHandler(event){
        if( event === "-" && iValue > 0){
            return () => setiValue(iValue - 1)
        }else if( event === "+" && iValue < stock){
            return () => setiValue(iValue + 1)
        }
    }

    return (
        <>
            <CounterDiv>
                <Button onClick={clickHandler("-")} role="button">-</Button>
                    <Input type="number" value={iValue} onChange={(e) => updateCountInput(e)} id={`count${id}`} />
                <Button onClick={clickHandler("+")} role="button">+</Button> 
            </CounterDiv>
            <Button onClick={() => {onAdd(iValue)}} role="button" style={{width: 'auto', height: 'auto'}}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;