import React from 'react';

export default function Color(props) {
    return (
        <div className="color-item" style={{backgroundColor: props.value}}> 
            {props.value.toUpperCase()}
        </div>
    )
}