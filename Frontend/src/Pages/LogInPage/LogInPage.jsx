import React, { useState } from "react";
import '../../StyleSheets/Loginpage.css';
import {useSelector, useDispatch } from "react-redux";
import { createUser } from "../../Slices/AuthneticationSlice.jsx";

const LoginPage = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [formData , setFormData] = useState({});
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess } = useSelector(state => state.auth);

  const toggleSignUp = () => {
    setIsSignUpActive(true);
  };

  const toggleLogin = () => {
    setIsSignUpActive(false);
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();    
    const res = await dispatch(createUser({formData , isSignUpActive}));
    console.log(res);
  };

  return (
    <div className="mainCont">
      <div className={`container ${isSignUpActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleOnsubmit}>
          <h1 className="login">Create Account</h1>
          <input className="login" type="text" placeholder="Name" required 
          onChange={(e) => setFormData({...formData, name: e.target.value })}/>
          <input type="email" className="login" placeholder="Email" required 
          onChange={(e) => setFormData({...formData, email: e.target.value })}/>
          <input
            type="password"
            className="login"
            placeholder="Password"
            onChange={(e) => setFormData({...formData, password: e.target.value })}
            required
          />
          {isLoading && <p className="">Loading...</p>}
            {isSuccess && <p>Login successful! Welcome {user?.displayName}</p>}
            {isError && <p style={{ color: "red" }}>❌ {isError}</p>}
          <button type="submit">Create</button>
        </form>
      </div>
      <div className="form-container sign-in ">
        <form onSubmit={handleOnsubmit}>
          <h1 className="login">Login</h1>
          <input className="login" type="text" placeholder="Username..." required 
          onChange={(e) => setFormData({...formData, name: e.target.value })}
          />
          <input className="login" type="password" placeholder="Password" required 
          onChange={(e) => setFormData({...formData, password: e.target.value })}
          />
          
            {isLoading && <p className="">Loading...</p>}
            {isSuccess && <p>Login successful! Welcome {user?.displayName}</p>}
            {isError && <p style={{ color: "red" }}>❌ {isError}</p>}
          
          <a href="#">Forget Your Password?</a>
          <button type="submit" onClick={toggleLogin}>Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="dont">Already have an account?</h1>
            <p>Login now...</p>
            <button className="" id="login" onClick={toggleLogin}>Login</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="dont">Don’t have an account?</h1>
            <p>Create one now...</p>
            <button className="" id="register" onClick={toggleSignUp}>Create</button>
          </div>
        </div>
      </div>
    </div>

            

    </div>
  );
};

export default LoginPage;
