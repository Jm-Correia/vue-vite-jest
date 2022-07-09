import axios from 'axios';

const url = import.meta.env.VITE_API;

console.log(`env.dev.API: ${url}`)
const axiosAdapater = axios.create({
    baseURL: url
});

export default axiosAdapater;