import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/authe-context';

const Cockpit = props => {
    const toggleButtonRef = useRef();
    const authContext = useContext(AuthContext);
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     //Http request.....
    //     setTimeout(() => {
    //         alert('Saved data to cloud!');
    //     }, 1000);
    // }, [props.persons]);


    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     //Http request.....
    //     setTimeout(() => {
    //         alert('Saved data to cloud!');
    //     }, 1000);
    // }, []);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleButtonRef.current.click();
        //Http request.....
        const timer = setTimeout(() => {
            // alert('Saved data to cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);


    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect');
        };
    });
    return (
        // <AuthContext.Consumer>
        //     {(context) => <div>
        //         <h1> {props.title}</h1>
        //         <h1>
        //             Hello world !
        //               </h1>
        //         <p>This is really working dude! </p>
        //         <button ref={toggleButtonRef} className={classes.Cockpit} onClick={props.onClick}>{props.isPressed ? "Hide Name" : "Show People"}</button>
        //         <button onClick={context.login}>Log in</button>
        //     </div>}
        // </AuthContext.Consumer>
        <div>
            <h1> {props.title}</h1>
            <h1>
                Hello world !
                  </h1>
            <p>This is really working dude! </p>
            <button ref={toggleButtonRef} className={classes.Cockpit} onClick={props.onClick}>{props.isPressed ? "Hide Name" : "Show People"}</button>
            <button onClick={authContext.login}>{authContext.authenticated ? "logOut" : "Log in"}</button>
        </div>
    )
}
export default React.memo(Cockpit);//wrap it with the Componete that might not be re rendered whenever there is any changes.