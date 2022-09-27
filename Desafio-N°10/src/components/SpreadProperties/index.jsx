import React from 'react';
import './styles.css';

const SpreadProperties = ({additionalStyles}) => {
    return (
        <div
            className='base'
            style={{
                ...additionalStyles
            }}
        >
            <p>Additional Styling</p>
        </div>
    )
}

export default SpreadProperties;