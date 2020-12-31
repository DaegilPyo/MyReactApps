import React from 'react';
import classes from './Button.module.css';
const customButton = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.onClick}>{props.children}</button>
);
export default customButton;