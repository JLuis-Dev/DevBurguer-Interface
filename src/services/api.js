import axios from "axios";


export const api = axios.create({
    baseURL: 'http://localhost:3001'
});

api.interceptors.request.use(async(config) => {
    const token = await localStorage.getItem('token')

    
    config.headers.authorization = `Bearer ${token}`

    return config
});