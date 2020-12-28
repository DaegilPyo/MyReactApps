import React from 'react';


const autheContext = React.createContext({
    authenticated: false,
    login: () => { }
});

export default autheContext; 