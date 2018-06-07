import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2973e.firebaseio.com/'
});

export default instance;