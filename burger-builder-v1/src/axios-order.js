import axios from 'axios';


const instance = axios.create({
    baseURL: " https://react-my-burger-bcc79-default-rtdb.firebaseio.com/"
});


export default instance;