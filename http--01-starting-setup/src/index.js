import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = "application/josn";


axios.interceptors.request.use(request => {
    console.log(`use : ${request}`);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);// when there is not internet connection..
});
axios.interceptors.response.use(request => {
    console.log(`response : `, request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
