import React from 'react';


const textValidation = (props) => {
    let isTextValid = (props.name.length > 5);
    const textStyle = {
        color: isTextValid ? "black" : "red"
    }
    let validationMessage = isTextValid ? 'Text long enough' : 'Text is too short';
    let body = <h1 style={textStyle}>{validationMessage}</h1>
    return <div>
        {!isTextValid ? <p>short...</p> : <p>enough</p>}
        {body}
    </div>;
}


export default textValidation;