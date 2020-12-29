import classes from './Backdrop.module.css';
import React from 'react';
const backDrop = (props) => {
    return (
        props.show ? <div
            className={classes.Backdrop} onClick={props.clicked}>
        </div> : null
    )
};

export default backDrop;