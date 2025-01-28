import axios from 'axios'

const baseUrl = axios.create(`${import.meta.env.VITE_BACKEND_SERVER}`);

const userRegistration = async (data) => await baseUrl.post('/user/register' , data);
const userlogin = async (data) => await baseUrl.post('/user/login' , data);

export {
    userRegistration,
    userlogin
}