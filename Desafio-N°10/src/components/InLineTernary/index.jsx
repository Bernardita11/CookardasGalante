import React from 'react';

const InLineTernary = ({condition}) => {
    return (
        <span>{condition ? "Feliz Año Nuevo": "Feliz San Valentin"}</span>
    )
}

export default InLineTernary;