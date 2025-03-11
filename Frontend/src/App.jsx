import React,{useEffect} from "react";
import { BrowserRouter, RouterProvider, Routes, createBrowserRouter,Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage/LogInPage";
import Home from "./Pages/Home/Home";
import CurrentTrip from "./Pages/CurrentTrip/CurrentTrip";
import PlanTrip from './Pages/PlanTrip/PlanTrip.jsx'
import ProtectedRoutes from "./Utility/ProtectedRoutes.jsx";

const App = () => {

  //Added ProtectedRoutes to the Routes
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/login" element={<LogInPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/currenttrip" element={<CurrentTrip/>}/>
          <Route path="/plantrip" element={<PlanTrip/>}/>
        </Route>

      </Routes>
    
    
    </BrowserRouter>
  );
};

export default App;
