import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return <div className='Output'>
        <h1>{props.assignmnetText}</h1>
        <p >{props.userName}</p>
    </div>
}

export default userOutput;