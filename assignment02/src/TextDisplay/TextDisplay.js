import React from 'react';

const textDisplay = (props) => {
    const textStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'left',
        margin: '16px',
        border: '1px solid black'
    }
    return <div style ={textStyle}>
        <p onClick={props.delete} > {props.name}</p>
    </div>;
}

export default textDisplay;