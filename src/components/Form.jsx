import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Formulario = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    width: auto;

    .input-divs {
        width: 30%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .icons {
        width: 1rem;
        height: 1rem;
    }

    .success {
        color: green;
        display: none;
    }

    .failure {
        color: red;
        display: block;
    }

    .form-inputs {
        width: 90%;
        height: 25px;
        margin: 20px;
        border: 2px solid red;
        border-radius: 20px;
        text-align: center;
    }

    .boton {
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
const Form = () => {
    const navigate = useNavigate();

    const { totalPrice, sendOrder } = useContext(CartContext);

    const [name, setName] = useState(false);
    const [phone, setPhone] = useState(false);
    const [email, setEmail] = useState(false);
    const [email2, setEmail2] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        name && phone && email && email2 ? setBtnDisabled(false) : setBtnDisabled(true);
    }, [name,phone,email,email2]);

    const nameValidation = (e) => {
        const successId = document.getElementById('nameSuccess');
        const failureId = document.getElementById('nameFailure');
        const fullnameId = document.getElementById('fullname');

        const noWhitespace = e.target.value.trim();

        if(noWhitespace !== ""){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            fullnameId.style.border = '2px solid green';
            setName(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            fullnameId.style.border = '2px solid red';
            setName(false);
        }
    };

    const phoneValidation = (e) => {
        const successId = document.getElementById('phoneSuccess');
        const failureId = document.getElementById('phoneFailure');
        const phoneId = document.getElementById('phone');

        const phoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        const test = phoneRegex.test(e.target.value);

        if(test){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            phoneId.style.border = '2px solid green';
            setPhone(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            phoneId.style.border = '2px solid red';
            setPhone(false);
        }
    };

    const emailValidation = (e) => {
        const successId = document.getElementById('emailSuccess');
        const failureId = document.getElementById('emailFailure');
        const emailId = document.getElementById('mail');

        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const test = emailRegex.test(e.target.value);

        if(test){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            emailId.style.border = '2px solid green';
            setEmail(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            emailId.style.border = '2px solid red';
            setEmail(false);
        }
    };

    const email2Validation = (e) => {
        const successId = document.getElementById('email2Success');
        const failureId = document.getElementById('email2Failure');
        const emailId = document.getElementById('mail');
        const email2Id = document.getElementById('mail2');

        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const test = emailRegex.test(e.target.value);
        const test2 = emailId.value === email2Id.value;

        if(test && test2){
            successId.style.display = 'block';
            failureId.style.display = 'none';
            email2Id.style.border = '2px solid green';
            setEmail2(true);
        }else {
            successId.style.display = 'none';
            failureId.style.display = 'block';
            email2Id.style.border = '2px solid red';
            setEmail2(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input) => input.value);
        const total = totalPrice();
        sendOrder(total, {name: data[0], telefono: data[1], mail: data[2]});
        navigate("/success");
    };

    return(
        <>
            <Formulario onSubmit={handleSubmit}>

                <label htmlFor="fullname">Nombre Completo:</label>
                <div className="input-divs">
                    <input type="text" id="fullname" name="fullname" placeholder="Nombre Completo" className="form-inputs" onChange={nameValidation} />
                    <FontAwesomeIcon icon={faCheck} className="icons success" id='nameSuccess' />
                    <FontAwesomeIcon icon={faXmark} className="icons failure" id='nameFailure' />
                </div>

                <label htmlFor="phone">Teléfono:</label>
                <div className="input-divs">
                    <input type="tel" id="phone" name="phone" placeholder="XX-XXXX-XXXX" className="form-inputs" onChange={phoneValidation} />
                    <FontAwesomeIcon icon={faCheck} className="icons success" id='phoneSuccess' />
                    <FontAwesomeIcon icon={faXmark} className="icons failure" id='phoneFailure' />
                </div>
                
                <label htmlFor="mail">Correo Electrónico:</label>
                <div className="input-divs">
                    <input type="email" id="mail" name="mail" placeholder="E-Mail" className="form-inputs" onChange={emailValidation} />
                    <FontAwesomeIcon icon={faCheck} className="icons success" id='emailSuccess' />
                    <FontAwesomeIcon icon={faXmark} className="icons failure" id='emailFailure' />
                </div>

                <label htmlFor="mail2">Repetir Correo Electrónico:</label>
                <div className="input-divs">
                    <input type="email" id="mail2" name="mail2" placeholder="E-Mail" className="form-inputs" onChange={email2Validation} />
                    <FontAwesomeIcon icon={faCheck} className="icons success" id='email2Success' />
                    <FontAwesomeIcon icon={faXmark} className="icons failure" id='email2Failure' />
                </div>

                <button type="submit" className="boton" id="btnComprar" disabled={btnDisabled}>Comprar</button>
            </Formulario>
        </>
    )
};

export default Form;