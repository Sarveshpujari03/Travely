import axios from 'axios'

const baseUrl = axios.create(`${import.meta.env.VITE_BACKEND_SERVER}`);

//user routes

const userRegistration = async (data) => await baseUrl.post('/user/register' , data);
const userlogin = async (data) => await baseUrl.post('/user/login' , data);

//protected user routes

const updateAvatar = async (data) => await baseUrl.post('/user/avatar' , data);
const profileData = async (data) => await baseUrl.post('/user/data/profile' , data);
const updateProfile = async (data) => await baseUrl.post('/user/update/userName' , data);


//Trip Routes

const planTrip = async( data ) => await baseUrl.post('/trip/plan' , data);
const saveTrip = async (data) => await baseUrl.post('/trip/save', data);
const getTrip = async (data) => await baseUrl.post('/trip/getTrips', data);
const deleteTrip = async (data) => await baseUrl.post('/trip/deleteTrip', data);
const completed = async (data) => await baseUrl.post('/trip/completed', data);


export {
    userRegistration,
    userlogin,
    planTrip,
    saveTrip,
    getTrip,
    deleteTrip,
    completed,
    updateAvatar,
    profileData,
    updateProfile
}