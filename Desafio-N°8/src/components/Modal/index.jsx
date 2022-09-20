import React, {useEffect} from 'react';
import './style.css'

export const Modal = (handleClose) => {
    useEffect(() => {
        const handleEsc = (event) => {
            console.log(event); //Evento nativo del browser
            
            //Escape
            if (event.keyCode === 27) {
                console.log("will close");
                handleClose(false);
            }

            //Enter
            if (event.keyCode === 13){
                console.log("will send");
                handleSubmit();
            }
        };
    
        window.addEventListener('keydown', handleEsc);
    
        return () => {
            console.log("Se desmontará el componente");
            window.removeEventListener('keydown', handleEsc);
        };

    }, [handleClose]);

    const handleSubmit = (evento) =>{
        evento?.preventDefault();
        console.log(evento);
    }
    
    const onClose = () => {
        // se cierra el modal
        handleClose(false);
    }

    return (
        <div className='background'>
            <form className='modal-container' onSubmit={handleSubmit}>
                <h2 className='title'>Titulo del modal</h2>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores ab voluptates nam deserunt hic quasi libero porro odit odio aut facilis earum, nulla provident perferendis inventore ex eaque illum.</p>
                <div className='buttons-container'>
                    <button className='rounded-button-cancel' type='button' onClick={onClose}>Close</button>
                    <button className='rounded-button-send' type='submit'>Send</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;
