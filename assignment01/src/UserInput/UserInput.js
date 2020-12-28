import React from 'react';
import './UserInput.css'



const userInput = (props) => {
    const inputStyle = {
        backgorundColor: 'white',
        font: 'inherit',
        border: '3px solid blue',
        padding: '8px'
    };
    return <input style={inputStyle} type="text" onChange={props.onChanged} value={props.userName} className='Input'></input>
}


export default userInput;