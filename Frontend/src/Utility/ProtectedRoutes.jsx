import { Outlet,Navigate } from "react-router-dom";
 
const ProtectedRoutes = () => {
    localStorage.setItem('isLoggedIn', true);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />

}

export default ProtectedRoutes;