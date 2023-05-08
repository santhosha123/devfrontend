import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginPage = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/user/login",{"password":password,"email":email})
    .then(resp=>
        {
          console.log(resp);
           localStorage.setItem("id",resp.data.id)
           navigate("/display");
        })
    .catch(err=>
        {
            alert("Invalid Data")
        })
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login as <a href='/adminlogin'>ADMIN</a></h2>
        <h2 className="login-header">User Login</h2>
        <form className="login-form">
          <label>
            Email:
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              className="login-input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
         <button onClick={handleSubmit} className="login-button">Sign In</button>
          <button onClick={()=>{navigate('/signup')}} className="login-button">Sign up</button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
