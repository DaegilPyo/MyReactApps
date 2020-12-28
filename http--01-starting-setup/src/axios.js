import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
instance.defaults.headers.common['Authorization'] = "AUTH TOKEN From Instance";

instance.interceptors.request.use(request => {
    console.log(`use : ${request}`);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);// when there is not internet connection..
});
instance.interceptors.response.use(request => {
    console.log(`response : `, request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});


export default instance;