import React from 'react';
import './styles.css';

const ClassBasedConditions = ({condition, otherClass}) => {
    return (               //operador terniario
        <div className={`${condition ? 'class-true' : 'class-false'} ${otherClass || ''}`}>
            <p>Se actualizó correctamente</p>
        </div>
    )
}

export default ClassBasedConditions;