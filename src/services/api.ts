import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.200.70.246:3333'
}); 